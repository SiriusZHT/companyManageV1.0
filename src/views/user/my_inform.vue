<template>
<div class="center">

    <Icon type="arrow-left" />
    <a-page-header
      class="header"
      title="用户中心 ｜ 我的资料"
      @back=" () => { this.$router.push({ path: '../user_first/' }); } "
    />
            <div class="container">

            <div class="form-box">
                <el-form ref="form" :model="form" label-width="35%">

                    <el-form-item label="头像">
                        <div class="user_pic" >
                            
                            <img src='' height="100%" width="100%" @click="changepic" />
                        </div>
                    </el-form-item>

                
                     <el-form-item label="昵称">
                        <el-input v-model="form.nicheng" class="input" disabled></el-input>
                    </el-form-item>

                   
                    <!-- <el-form-item label="姓名">
                        <el-input v-model="form.name" class="input"></el-input>
                    </el-form-item> -->

                     <el-form-item label="常用邮箱">
                        <el-input v-model="form.email" class="input"></el-input>
                    </el-form-item>

                      <el-form-item label="手机号">
                        <el-input v-model="form.phonenum" class="input"></el-input>
                    </el-form-item>

                    
                     

                    
                    <el-form-item label="性别">
                       <el-radio-group v-model="form.resource">
                            <el-radio label="男" ></el-radio>
                            <el-radio label="女"></el-radio>
                            <el-radio label="其它"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                  
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" class="btn">提交</el-button>
                        &emsp;
                        <el-button class="btn">取消</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </div>
</div>
    
    
</template>

<script>
export default {
     name: 'my_inform',
    data() {
        return {
            
            pic_url:'',
            img:'',
            form: {
                nicheng:'',
                email:'',
                phonenum:'',
            }
        };
    },
    methods: {

        //修改信息
        onSubmit() {      
            this.axios({
                url:'http://121.36.57.122:8080/user/update',
                 headers: {
                 Authorization: sessionStorage.getItem("token"),
                    },
                method:'post',

                params:{
                    username:this.form.nicheng,
                    phone:this.form.phonenum,
                    email:this.form.email,
                    sex:this.form.sex
                }
            })
            this.$message.success('提交成功!');
        },

        changepic(){

        }

    },

    mounted(){
        
        this.axios({
            url:'http://121.36.57.122:8080/user/getInfo',
             headers: {
                Authorization: sessionStorage.getItem("token"),
            },
            method:'get',
        }).then(res=>{
            console.log(res)
            console.log(res.result.username)

            this.form.nicheng = res.result.username;
           
            this.form.email = res.result.email;
            this.form.phonenum = res.result.phone; 
            this.form.resource = res.result.sex;

            // 图片的上传功能暂时没有实现
            // this.pic_url = res.result.img;

            // var img = document.getElementsByClassName('.img1');
            
            // console.log(img);
            // img.src = 'this.pic_url';
                // img.src = '../../assets/img.jpg';
            // console.log(img.src)
           
        }).catch(err=>{
            console.log(err)
        })

    }


}
</script>

<style scoped>



.container{
    width: 800px;
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-left: 10%;
    margin-top:10px;
}
.btn{
    width:120px;
}

.input{
    width: 300px;
}
span{
    font-size: 2px;
    color:#409EFF;
    cursor: pointer;
}

.user_pic{
    border: 1px solid black;
    height: 100px;
    width: 100px;
    /* position: relative; */
    /* margin-top:-50px;
    margin-left:50px; */
    border-radius: 50rem;
    /* background-image:url(../../assets/img.jpg); */
}

.center{
    height: 100%;
    /* border: 1px solid black; */
    width: 90%;
    margin-left:5%;
}

span{
    font-size: 12px;
    font-family: sans-serif;
    color: grey;
}
</style>
<template>
<div class="center">
    <span>用户中心 / 我的资料</span>
    <br/>
    <hr/>
    <br/>
            <div class="container">

            <div class="form-box">
                <el-form ref="form" :model="form" label-width="35%">

                    <el-form-item label="头像">
                        <div class="user_pic" ></div>
                    </el-form-item>

                
                     <el-form-item label="昵称">
                        <el-input v-model="form.nicheng" class="input"></el-input>
                    </el-form-item>

                   
                    <el-form-item label="真实姓名">
                        <el-input v-model="form.name" class="input"></el-input>
                    </el-form-item>

                   
                     <el-form-item label="常用邮箱">
                        
                        <!-- <el-input v-model="form.email"></el-input> -->
                        <el-tag v-model="form.email">2036314200@qq.com</el-tag>&emsp;<span>修改邮箱</span>
                    </el-form-item>

                 
                    <el-form-item label="手机号">
                        <!-- <el-input v-model="form.email"></el-input> -->
                          <el-tag v-model="form.phonenum">19950754279</el-tag>&emsp;<span>修改手机号</span>
                    </el-form-item>

                    
                    <el-form-item label="性别">
                       <el-radio-group v-model="form.resource">
                            <el-radio label="男"></el-radio>
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
            
            form: {
                nicheng:'',
                name: '',
                email:'',
                phonenum:'',
              
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
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
    /* background-image: url(../../assets/img/img.jpg); */
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
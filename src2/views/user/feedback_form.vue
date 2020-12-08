<template>
<div class="center">
    <span>用户中心 / 我要反馈</span>
    <br/>
    <hr/>
    
<div class="container">
        <div class="form">
             <el-form ref="form" :model="form" label-width="250px">
                <br/>
                  <el-form-item label="选择软件">
                        <el-select v-model="form.ruanjian" placeholder="请选择" class="op">
                            <el-option key="bg" label="办公软件" value="bg"></el-option>
                            <el-option key="yx" label="游戏软件" value="yx"></el-option>
                            <el-option key="kf" label="开发软件" value="kf"></el-option>
                        </el-select>
                    </el-form-item>

                     <el-form-item label="问题类型">
                        <el-select v-model="form.type" placeholder="请选择" class="op">
                            <el-option key="hp" label="黑屏" value="hp"></el-option>
                            <el-option key="kd" label="卡顿" value="kd"></el-option>
                            <el-option key="sj" label="升级失败" value="sj"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="请简要描述问题">
                        <el-input v-model="form.jianyao" class="input" ></el-input>
                    </el-form-item>

                    <el-form-item label="详细描述">
                        <el-input type="textarea" rows="5" v-model="form.desc" class="input" placeholder="友善，精确的问题更快得到解答"></el-input>
                    </el-form-item>
                    
                     <el-form-item label="上传附件：">
                        <el-button type="file" @click="onSubmit">上传附件</el-button>
                        <p>附件大小不超过3M</p>
                    </el-form-item>
                    
                    <el-form-item label="手机号">
                        <el-input v-model="form.phonenum" class="input" placeholder="用于及时联系"></el-input>
                    </el-form-item>
                    
                     <el-form-item label="邮箱号">
                        <el-input v-model="form.email" class="input" placeholder="用于及时联系"></el-input>
                    </el-form-item>

                     <el-form-item>
                        <el-button type="primary" @click="Submit" class="but">提交</el-button>
                        <el-button class="but">取消</el-button>
                    </el-form-item>
             </el-form>
        </div>
    </div>

    

</div>
    
</template>

<script>
export default {
    name:'feedback_form',
    data(){
        return{
           

            form: {
                ruanjian:'',
                type:'',
            }
        };
    },
     methods:{
        Submit(){

        },
        onSubmit(){

        },
    }
   
}
</script>

<style scoped>

.but{
    width: 100px;
    height: 30px;
    /* line-height: 30px; */
}
input{
    height: 30px;
    width: 200px;
}

form{
     /* border: 1px solid black; */
     width: 500px;
}

.container{
    border: 1px solid white;
    /* height: 500px; */
    border-radius: 10px;
    width: 800px;
    margin-left: 200px;
    background: #fff;
    
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
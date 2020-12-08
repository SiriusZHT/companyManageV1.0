<template>
    <div class="back_image">
        <div class="login">
            <div class="title"><h1>软件售后服务系统</h1></div>
            <hr/>

            <form>
                <div class="one">
                    <span>邮箱</span>
                    <input type="" v-model="email"/>
                </div>

                <div class="one">
                    <span>验证码</span>
                    <input class="code" type="" v-model="code"/>
                    <button @click="getcode" class="getcode1">获取验证码</button>
                </div>

                <div class="one">
                    <button @click="login1" ><strong>Login</strong></button>
                </div>

                <div class="one">
                    <a @click="register">&emsp;免费注册</a>
                    <a>&emsp;忘记密码？</a>
                </div>

            </form>
            <br/>
           
          
        </div>
    </div>
</template>

<script>

export default {
    name:'Login',
    data(){
        return{
            email:'',
            code:'',
            key:'',
        }
    },

methods:{
     getcode(){
         this.axios({
          url:'http://121.36.57.122:8080/user/getCode',
          params:{
            email:this.email
          }
        }).then(res=>{
            console.log(res)
            this.key = res.data.result;
        }).catch(err=>{
          console.log(err)
        })
    },

    login1(){
        this.axios({
            url:'http://121.36.57.122:8080/user/query',
            method:'post',
            params:{
                email:this.email,
                code:this.code,
                key:this.key
            }
        }).then(res=>{
            console.log(res);
            console.log('token:'+res.data.result);
            //获取后端token
            this.userToken = 'Bearer ' + res.data.result;
            //储存到vuex
            localStorage.setItem('token',this.userToken);
            this.$router.push({ path:'user/user_first'})
        }).catch(err=>{
            console.log(err);
            //
            //失败后删除token,并跳转到登录界面
            localStorage.removeItem('token');
            // this.$router.push({ path:'/login' });
            alert('账户密码错误！');
        });
    },

    register(){
        this.$router.push({ path:'/register' });
    }

}

}
</script>

<style scoped>

    .getcode1{
        height: 30px;
        width: 80px;
    }

    .code{
     height: 30px;
      width: 100px;
      background-color: transparent;
      border-color:white ;
      color: white;
      margin-left: 15px;
    }
    a{
        color: white;
        margin-left:80px;
        cursor: pointer;
    }
    button{
        height: 30px;
        width: 260px;
        margin-left: 60px;
        background-color:#00BFFF;
        border: none;
        color: white;
    }
    span{
        color: white;
    }
    .one{
        margin-left:10%;
        margin-top: 30px;
        
    }

    input{
      height: 30px;
      width: 250px;
      background-color: transparent;
      border-color:white ;
      color: white;
      margin-left:30px;
    }

    .title{
        width: 100%;
        text-align: center;
        color: white
    }
    

    .login{
        height: 300px;
        width: 400px;
        border:1px solid white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      
    }


    .back_image{
    width: 100%;
    height: 100%;
    background: url(../assets/login-bg.jpg) center center no-repeat;
    background-size: 100% 100%;
    position: fixed;
    }

    
   
</style>
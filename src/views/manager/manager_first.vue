<template>
    <div class="big">

    <div class="top">
        <div class="logo">软件售后服务系统</div>
        <div class="header-right">
            <div class="touxiang">
                <div class="pic">
                    <img src="../../assets/img.jpg"/>
                </div>

                <div>
                    <span class="username">manager</span>
                    
                </div>
                <button class="exit" @click="exit">退出</button>
            </div>
        </div>
    </div>

    <div class="bottom">
        <div class="left">
            <ul class="ul">
                <router-link class='router' to='../manager_first/first'>
                <li class="first">首页</li>
                </router-link>
                <li>管理员中心
                    <ul>
                        <router-link class='router' to='../manager_first/my_worksheet'>
                        <li>我的工单</li>
                         </router-link>

                        <router-link class='router' to='../manager_first/manage_users'>
                        <li>管理用户</li>
                         </router-link>

                        <router-link class='router' to='../manager_first/log'>
                        <li>日志统计</li>
                         </router-link>

                        <router-link class='router' to='../manager_first/authorization'>
                        <li>权限管理</li>
                         </router-link>

                        <router-link class='router' to='../manager_first/alter_common_ques'>
                        <li>增加版本信息</li>
                         </router-link>

                        <!-- <router-link class='router' to='../manager_first/software'>
                        <li>软件</li>
                         </router-link> -->

                        <!-- <router-link class='router' to='../manager_first/add_version'>
                        <li>增加版本库</li>
                         </router-link> -->

                        <!-- <router-link class='router' to='../manager_first/handle_apply'>
                        <li>处理申请</li>
                         </router-link> -->
                    </ul>
                </li>
            </ul>
        </div>
     <div id="center" >
            <!-- <img src="" width="100%" height="100%" id="img"> -->
            <router-view></router-view>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'user_first',
    data(){
        return{

        }
    },

    methods:{
         exit(){
        this.$router.push({ path:'/login' });
    }
    }
   
    
}
</script>


<style scoped>
.router{
    text-decoration: none;
    color: white;
}
.router:hover{
    color:#00BFFF;
}

#center{
     /* border: 1px solid black; */
    /* background-image: url(../../assets/login-bg.jpg); */
    /* background-size: 100%; */
    /* background-color: red; */
    width: 85%;
    height: 100%;
    /* margin-left:15%; */
    /* margin-top: -100%; */
    float:right;
    /* padding-right:2%; */
}


.first:hover{
    color:#00BFFF;
}

.ul{
    position: absolute;
    margin-left:5%;
    font-size: 15px;
    margin-top: 20px;
    color: white;
    font-family: sans-serif;
    cursor: pointer;
}

li{
    margin-top:30px;
}

li ul{
    margin-left: 20px;
    cursor: pointer;
}

/* li ul>li:hover{
    color:#00BFFF;
} */


.bottom{
    /* border: 1px solid black; */
    height:90%;
    width:100%;
}

.exit{
    font-size: 14px;
    margin-left:20px;
    background-color:#00BFFF;
    border: none;
    color: whitesmoke;
    width: 50px;
    cursor: pointer;
}

.username{
    font-size: 14px;
    margin-left: 10px;
}
.pic{
    margin-left: 20px;
}
.touxiang{
    display: flex;
    height: 70px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.pic img{
    border: 1px solid black;
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.header-right{
    /* float: right; */
    padding-right: 50px;
    /* border: 1px solid red; */
    margin-left: 85%;
    margin-top: -70px;
}
.logo{
     width: 250px;
    line-height: 70px;
    padding-left:50px ;

    /* float: left; */
}

.top{
    /* border: 1px solid black; */
    height:10%;
    width: 100%;
    background-color: black;
    font-size: 22px;
    color: white;
   
}

.left{
    background-color: #485363;
    /* border: 1px solid black; */
    height:100%;
    width:15%;
    float:left;
}

.big{
    height:100%;
    width: 100%;
    /* border: 1px solid white; */
    background-color:#F0F0F0;
}
</style>
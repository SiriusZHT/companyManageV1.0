<template>
<div class="center">
    <span>用户中心 / 常见问题</span>
    <br/>
    <hr/>
    <br/>

     <div class="pic"></div>

        <div class="big">
             <h1>常见问题</h1>
            <div class="con">
               <div class="bg">
                   <ul>
                       办公软件补丁包
                       <br/>
                       <li>&emsp;<u>v-1-1-1</u>&emsp;&emsp; <a href="baidu.com"><u>2001-1-1</u></a></li>
                   </ul>
               </div>
               <div class="bg">
                   <ul>
                       游戏软件补丁包
                       <br/>
                       <li>&emsp;<u>v-1-1-1</u>&emsp;&emsp; <a href="baidu.com"><u>2001-1-1</u></a></li>
                   </ul>
               </div>
                <div class="bg">
                     <ul>
                       开发软件补丁包
                       <br/>
                       <li>&emsp;<u>v-1-1-1</u>&emsp;&emsp; <a href="baidu.com"><u>2001-1-1</u></a></li>
                   </ul>
                </div>
            </div>
        </div>
</div>
    
    
</template>

<style scoped>
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

a{
    color:#409EFF;
}
.bg{
    float: left;
    /* border: 1px solid black; */
    height: 100%;
    width: 300px;
    margin-left:50px;
}

li{
    /* border: 1px solid black; */
    list-style: none;
}



u{
    color:#409EFF ;
}

.big{
    width: 100%;
    height: 350px;
    margin-top:50px;
    border: 1px solid white;
    background-color: white;
}

.con{
    height:300px;
    width: 1150px;
    /* border: 1px solid black; */
    
    margin-top: 10px;
    margin-left: 50px;
}


.pic{
    /* border: 1px solid black; */
    width: 100%;
    height:150px;
    background-image: url(../../assets/login-bg.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>
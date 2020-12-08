<template>
  <div class="center">
    <Icon type="arrow-left" />
    <a-page-header
      class="header"
      title="用户中心 ｜ 版本库下载"
      @back=" () => { this.$router.push({ path: '../manager_first/' }); } "
    />

    <div class="pic"></div>

    <div class="big">
      <h1>版本下载</h1>
      <div class="con">

        <el-table :data="tableData"  height="100%" style="width:100%" >
          <el-table-column prop="title" label="版本下载" width="">
          </el-table-column>

         <el-table-column
      fixed="right"
      label=""
      width="">

      <template scope="scope">
        <el-button
          @click="detail(scope.row.title)"
          type="text"
          size="small">
          查看详情
        </el-button>
         </template>
    </el-table-column> 
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      tableData:[],
      // tableData: [
      //   {
      //     title: "办公软件专业版9.0.0发布，主要提高性能",
      //   },
      // ],
    };
  },
  methods:{
      detail(data){
          console.log(data)
           this.$store.commit('download',data);
           this.$router.push({ path:'/user_first/download'})
      }
  },

  mounted(){
     this.axios({
          url:'http://121.36.57.122:8080/edition/getAll',
          headers:{
            'Authorization':
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpZCI6IjJmODMxYmIzLTYwNDktNDYwNy05Y2YzLTMxMGM0YmQyMjY0YSIsImV4cCI6MTYwNzY3MTMzNX0.3R-FVoBpwueeTBlFXu0JfqqhtHbqWZA4WvRjQsCT3u_DGsNyf2FtSZ3yjURYKRn0"
          },
                //  'Authorization':sessionStorage.getItem("token")
                
                //  localStorage.getItem('token')
             
        }).then((res)=>{
           console.log(res);
           this.list = res.data.result 
           console.log(res.result)
           // console.log("list" + this.list);
           this.tableData = this.list
           console.log(this.list)
          //  console.log("re"+res.data.result)
          //  alert(+res.data.result[0].username)
          console.log(this.tableData)
        }).catch(err=>{
            console.log(err);
            this.$message.error('err.response.message！');
        });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  font-size: 14px;
  /* margin-left:30%; */
}

a:hover {
  color: #409eff;
}

.center {
  height: 100%;
  /* border: 1px solid black; */
  width: 90%;
  margin-left: 5%;
}

span {
  font-size: 12px;
  font-family: sans-serif;
  color: grey;
}

.big {
  width: 100%;
  height: 350px;
  margin-top: 50px;
  border: 1px solid white;
  background-color: white;
}

.con {
  float: left;
  height: 300px;
  width: 100%;
  /* border: 1px solid black; */
  margin-top: 10px;
}

.pic {
  /* border: 1px solid black; */
  width: 100%;
  height: 150px;
  background-image: url(../../assets/login-bg.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}

.conone {
  height:100%;
}
</style>
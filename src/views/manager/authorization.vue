
<template>
<div class="center">
    <Icon type="arrow-left" />
    <a-page-header
      class="header"
      title="管理员中心 ｜ 权限管理"
      @back=" () => { this.$router.push({ path: '../manager_first/' }); } "
    />
   

    <!-- <button class="add_group">增加分组</button> -->
    <div class="main">
      <el-table
    :data="tableData4"
    border
    style="width: 100%"
    height="100%">

     @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="40">
    </el-table-column>

    <el-table-column
      fixed
      prop="name"
      label="分组名称"
      width="200">
    </el-table-column>

    <el-table-column
      prop="username"
      label="用户列表"
      width="200">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="">

      <template scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          删除
        </el-button>

      
        <el-button
        @click="dialogFormVisibleshow(scope.row.name)"
          type="text"
          size="small">
          设置权限
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>

<!-- 权限选择 -->
<el-dialog class="dialog" title="设置权限" :visible.sync="dialogFormVisible">
<div class="border">
  <form action="" class="load-indicator main-form form-ajax" id="managePrivForm" method="post" target="hiddenwin">
    <table class="table table-hover table-striped table-bordered" id="privList">
      <thead>
        <tr class="text-center">
          <th class="thWidth">模块</th>
          <th colspan="2">方法</th>
        </tr>
      </thead>
      <tbody>
        <tr class="even">
              <th class="text-middle text-right thWidth">
                <div class="checkbox-primary checkbox-inline checkbox-right check-all">
                  <!-- <input type="checkbox" id="allCheckerindex"> -->
                  <label class="text-right" for="allCheckerindex">首页</label>
                </div>
              </th>
              <td id="index" class="pv-10px" colspan="2">
                    <div class="group-item">
                  <input type="checkbox"  name="bianli" @click="first" id="fi" value="0"> <label for="actions[index]index">首页</label>
                   </div>
              </td>
        </tr>

        <tr class=" bg-gray">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckmyfeedback"> -->
            <label class="text-right" for="allCheckmyfeedback">我的反馈</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli"  value="1" id="fi1"> 
            <label for="actions[testreport]browse">提交我的反馈</label></div>          </div>
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="2" id="fi2"> 
            <label for="actions[testreport]create">删除我的反馈</label></div>
            </div>
            </td>
      </tr>

        <tr class=" even">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckapply"> -->
            <label class="text-right" for="allCheckapply">申请界面</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="3" id="fi3">
             <label for="actions[testreport]browse">提交申请</label></div> </div>
            </td>
      </tr>

       <tr class=" bg-gray">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckapply"> -->
            <label class="text-right" for="allCheckapply">我的资料</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="4" id="fi4"> 
            <label for="actions[testreport]browse">修改我的资料</label></div> </div>
            </td>
      </tr>

      
       <tr class="even">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckapply"> -->
            <label class="text-right" for="allCheckapply">版本库</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="5" id="fi5"> 
            <label for="actions[testreport]browse">下载版本库</label></div>          </div>
            </td>
      </tr>

      <tr class="even">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckapply"> -->
            <label class="text-right" for="allCheckapply">分配工单</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"   name="bianli" value="6" id="fi6"> 
             <label for="actions[testreport]browse">分配我的工单</label></div></div>
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="7" id="fi7">
             <label for="actions[testreport]browse">删除工单</label></div></div>
            </td>
      </tr>

      <tr class="bg-grey">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckapply"> -->
            <label class="text-right" for="allCheckapply">管理用户</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="8" id="fi8">
            <label for="actions[testreport]browse">增加用户</label></div></div>

            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="9" id="fi9"> 
            <label for="actions[testreport]browse">删除用户</label></div></div>
             <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"   name="bianli" value="10" id="fi10">
            <label for="actions[testreport]browse">修改用户角色</label></div></div>
            </td>
      </tr>

       <tr class="bg-grey">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckapply"> -->
            <label class="text-right" for="allCheckapply">日志统计</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox" name="bianli" value="11" id="fi11">
             <label for="actions[testreport]browse">查看日志</label></div></div>
            </td>
      </tr>

       <tr class="bg-grey">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckapply"> -->
            <label class="text-right" for="allCheckapply">增加版本库</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="12" id="fi12"> 
            <label for="actions[testreport]browse">提交最新版本信息</label></div> </div>
            </td>
      </tr>

      <tr class="bg-grey">
        <th class="text-middle text-right thWidth">
          <div class="checkbox-primary checkbox-inline checkbox-right check-all">
            <!-- <input type="checkbox" id="allCheckapply"> -->
            <label class="text-right" for="allCheckapply">处理申请</label>
          </div>
        </th>
            <td id="testreport" class="pv-10px" colspan="2">
            <div class="group-item">
            <div class="checkbox-primary checkbox-inline"><input type="checkbox"  name="bianli" value="13" id="fi13"> 
            <label for="actions[testreport]browse">处理申请</label></div> </div>
            </td>
      </tr>

      </tbody>
    </table>
  </form>
  
  

</div>  

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible_sure" class="sure" >确定</el-button>
    <el-button type="primary" @click="dialogFormVisible = false" class="cancel">取消</el-button>
  </div>

</el-dialog>

</div>
</template>

<script>
// var i = 0;
import $ from  'jquery'
// import store from '../../store'
//  console.log(store.state.showfirst)

// 
  export default {
    data() {

      return {
        character:'',

        string:[],
        list:[],

         tableData4:[],
        dialogFormVisible:false,
       

      }
    },

    //遍历后端用户
     mounted(){
        this.axios({
          url:'http://121.36.57.122:8080/user/getAllUser',
          headers: {
          Authorization:
            // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpZCI6IjJmODMxYmIzLTYwNDktNDYwNy05Y2YzLTMxMGM0YmQyMjY0YSIsImV4cCI6MTYwNzQwNDgzOH0.j3NFo27Z8lgzSpsXBJpnUJJDpygOqxx0FunaYFr-ynggha2ToWefa8DnDiFl-AJt"
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpZCI6IjJmODMxYmIzLTYwNDktNDYwNy05Y2YzLTMxMGM0YmQyMjY0YSIsImV4cCI6MTYwNzU2MTUwMX0.wziYra0H-c0SAjnTWxgFb-pver4HFyjHJ3Nt0PBzQQx2m8KrcHbXnFscD8-Dq_QL",
        
        },
        }).then(res=>{
           console.log(res);
           
           this.list = res.data.result
         
            // console.log("list" + this.list);
           this.tableData4 = this.list
           
          //  console.log("re"+res.data.result)
          //  alert(+res.data.result[0].username)

          
        }).catch(err=>{
            console.log(err);
        });
       },

    methods: {
      first(){
        // if(event.target.checked){
        //   this.$store.commit('change',true); 
        // }
        // else{
        //   this.$store.commit('change',false); 
        // }
      },
       dialogFormVisibleshow(data){
        // console.log(data)//  console.log(index,1)
        
        this.character = data;
        console.log( this.character)

          this.axios({
         
           url:'http://121.36.57.122:8080/rolePremission/getAllPreByName',
           headers: {
          Authorization:
            // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpZCI6IjJmODMxYmIzLTYwNDktNDYwNy05Y2YzLTMxMGM0YmQyMjY0YSIsImV4cCI6MTYwNzQwNDgzOH0.j3NFo27Z8lgzSpsXBJpnUJJDpygOqxx0FunaYFr-ynggha2ToWefa8DnDiFl-AJt"
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpZCI6IjJmODMxYmIzLTYwNDktNDYwNy05Y2YzLTMxMGM0YmQyMjY0YSIsImV4cCI6MTYwNzU2MTUwMX0.wziYra0H-c0SAjnTWxgFb-pver4HFyjHJ3Nt0PBzQQx2m8KrcHbXnFscD8-Dq_QL",
        
        },
           params:{
              name:this.character
           },

         }).then(res=>{
             //循环遍历复选框
          // let i = 0
           console.log(res)
            // if(res.result[0] == 1)
             console.log(res.data.result.length)
          // var len = res.result.length;
          
          // for(i;i<len;i++){
          //   if(res.result[i] == 1){
          //     console.log(i);
          //       $("input:checkbox[value='i']").attr('checked','true');
                
          //   }else{
          //       $("input:checkbox[value='i']").attr('checked','false');
          //   }
          // }
          
          // $("input:checkbox[value='1']").attr('checked','true');

          if(res.result[0] == 1){
             $("input:checkbox[value='0']").attr('checked','true');
          }if(res.result[1] == 1){
             $("input:checkbox[value='1']").attr('checked','true');
           }
           if(res.result[2] == 1){
             $("input:checkbox[value='2']").attr('checked','true');
           }
           if(res.result[3] == 1){
             $("input:checkbox[value='3']").attr('checked','true');
           }
           if(res.result[4] == 1){
             $("input:checkbox[value='4']").attr('checked','true');
           }
           if(res.result[5] == 1){
             $("input:checkbox[value='5']").attr('checked','true');
           }
           if(res.result[6] == 1){
             $("input:checkbox[value='6']").attr('checked','true');
           }
           if(res.result[7] == 1){
             $("input:checkbox[value='7']").attr('checked','true');
           }
           if(res.result[8] == 1){
             $("input:checkbox[value='8']").attr('checked','true');
           }
           if(res.result[9] == 1){
             $("input:checkbox[value='9']").attr('checked','true');
           }
           if(res.result[10] == 1){
             $("input:checkbox[value='10']").attr('checked','true');
           }
           if(res.result[11] == 1){
             $("input:checkbox[value='11']").attr('checked','true');
           }
           if(res.result[12] == 1){
             $("input:checkbox[value='12']").attr('checked','true');
           }
           if(res.result[13] == 1){
             $("input:checkbox[value='13']").attr('checked','true');
           }
          
          

         }).catch(err=>{
          console.log(err)
         })

         this.dialogFormVisible = true;
        // console.log('dadada')
        // 获取当前角色的权限
        
          
       },

      dialogFormVisible_sure(){ 
        var A = '';var B ='';var C='';var D='';
         var E = '';var F = '';var G = '';var H = '';var I = '';var J = '';
         var K ='';var L ='';var M = '';var N = ''
        var a = document.getElementById('fi')
        console.log(a.checked);
        if(a.checked){
           this.$store.commit('change',true);
          //  this.string.push(0)
              A = '0';
              console.log(A)
         
        }else{
          this.$store.commit('change',false);
          A = '#';
        }

        var b = document.getElementById('fi1')
        // console.log(b.checked);
        if(b.checked){
           B = '1';
        }else{
           B = '#';
        }

        var c = document.getElementById('fi2')
        // console.log(c.checked);
        if(c.checked){
           C = '2';
          
        }else{
           C = '#';
        }

        var d = document.getElementById('fi3')
        // console.log(d.checked);
        if(d.checked){
             D= '3';
        }else{
           D= '#';
        }

       
        var e = document.getElementById('fi4')
        // console.log(e.checked);
        if(e.checked){
           E= '4';
        }else{
          E= '#';
        }

        var f = document.getElementById('fi5')
        // console.log(f.checked);
        if(f.checked){
          F= '5';
        }else{
           F= '#';
        }
       
       var g = document.getElementById('fi6')
        // console.log(g.checked);
        if(g.checked){
          G = '6'
        }else{
          G = '#'
        }
       
       var h = document.getElementById('fi7')
        // console.log(h.checked);
        if(h.checked){
          H = '7'
        }else{
          H = '#'
        }
       
       var i = document.getElementById('fi8')
        // console.log(i.checked);
        if(i.checked){
          I = '8'
        }else{
          I = '#'
        }
       
       var n = document.getElementById('fi9')
        // console.log(n.checked);
        if(n.checked){
           N = '9'
        }else{
          N = '#'
        }

        var j = document.getElementById('fi10')
        // console.log(j.checked);
        if(j.checked){
          J = '10'
        }else{
          J = '#'
        }

        var k = document.getElementById('fi11')
        // console.log(k.checked);
        if(k.checked){
           K = '11'
        }else{
          K = '#'
        }
        var l = document.getElementById('fi12')
        // console.log(l.checked);
        if(l.checked){
           L = '12'
        }
        else{
          L = '#'
        }
        var m = document.getElementById('fi13')
        // console.log(m.checked);
        if(m.checked){
          M = '13'
        }else{
          M = '#'
        }
       

        this.axios({
          url:'http://121.36.57.122:8080/rolePremission/update',
          headers:{
             'Authorization':sessionStorage.getItem("token")
          },
          method:'post',

          params:{
            premission:A+','+B +',' +C +','+D+','+E +',' +F +','+G+','
            +H +',' +I +','+J+','+K +',' +L +','+M +',' + N,
            role:this.character
          }
        }).then(res=>{
            console.log(res)
             this.string = []
             this.$message.success('修改权限成功！');
        }).catch(err=>{
          console.log(err)
        })
         
        
         this.dialogFormVisible = false;
      },
     
      deleteRow(index, rows) {
        rows.splice(index, 1);
        
      },

      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },

      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

       handleEdit(index, row) {
        console.log(index, row);
      },
    },
    
    
  }
</script>

<style scoped>


.cancel{
   width:50px;
   height:30px;
}
.sure{
  width:50px;
  height:30px;
}
/* tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
} */
* {
    margin: 0;
    padding: 0;
}
.text-center td, .text-center th {
    text-align: center;
}
.table td, .table th {
    padding: 10px 25px;
    line-height: 1.42857143;
    vertical-align: top;
    border-bottom: 1px solid #cbd0db;
    -webkit-transition: background .2s cubic-bezier(.175,.885,.32,1);
    -o-transition: background .2s cubic-bezier(.175,.885,.32,1);
    transition: background .2s cubic-bezier(.175,.885,.32,1);
}
.table-bordered td, .table-bordered th {
    border: 1px solid #cbd0db;
    /* width:150%; */
    /* float:right; */
}
.thWidth {
    width: 20% !important;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
table {
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 2px;
}
.group-item {
    display: block;
    width: 220px;
    float: left;
    font-size: 14px;
}
table {
    border-spacing: 0;
    border-collapse: collapse;
}
.border{
  /* border: 1px solid black; */
  height: 90%;
  width: 90%;
  margin-left: 5%;
}

a{
  color: #00BFFF;
}


.biaoge{
    font-size: 13px;
    table-layout: fixed;
    background-color: #fff;
    border-radius: 4px 4px 0 0;
}
.add_group{
    border: none;
    background-color:#00BFFF;
    color: white;
    width: 100px;
    height: 30px;
    /* float: right; */
    margin-left: 90%;
    border-radius: 4px;
}

.main{
    /* border: 1px solid black; */
    height: 80%;
    margin-top:15px;
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
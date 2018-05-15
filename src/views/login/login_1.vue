<template>
	 <el-main class="lg_bd">
     <el-form 
      label-position="right"
      ref="form" 
      :model="form" 
      label-width="80px"
      class="main_wrap">
      <h3>用户登录系统</h3>
        <!-- <el-form-item label="用户类型">
          <el-radio-group v-model="form.user_type">
            <el-radio label="个人用户"></el-radio>
            <el-radio label="机构用户"></el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item label="用户名">
            <el-input 
              type="text" 
              v-model="form.username" 
              placeholder="username" >
            </el-input>
        </el-form-item>
        <!-- <el-form-item label="邮箱">
            <el-input 
              type="email" 
              v-model="form.email" 
              placeholder="Email" >
            </el-input>
        </el-form-item> -->
        <el-form-item label="密码" prop="password">
          <el-input 
            type="password" 
            v-model="form.password" 
            placeholder="password" >
          </el-input>
        </el-form-item>
      </el-form>
   </el-main>
</template>

<style scoped>
   .lg_bd{
        background: url("./400066846_banner.jpg");
        min-height: 540px;
        overflow: hidden;
    }
    .login-form {
      width: 310px;
      background: #fff;
      box-shadow: 0 0 5px #f60;
      padding: 5px 30px 0 30px;
      border-radius: 25px; 
    }
    .main_wrap{
        float: right;
        width: 380px;
        padding: 15px;
        min-height: 370px;
        background: #fff;
        margin-right: 240px;
        margin-top: 40px;
    }
</style>

<script>
    export default{
        data(){
            return{
                form: {
                  user_type: '',
                  username:'',
                  email:'',
                  password:''
                  }
            }
        }
      }
</script>
<template>
	<div class="lg_bd">
        <div class= "login-wrap main_wrap" v-show="showLogin">
           <h3>欢迎登录养老网</h3>
           <p v-show="showTishi">{{tishi}}</p>
           <input type="text" placeholder="请输入用户名\邮箱\手机号" v-model="username">
           <input type="password" placeholder="请输入密码" v-model="password">
           <button v-on:click="login">登录</button>
           <span v-on:click="ToRegister">没有账号？马上注册</span>
        </div>

        <div class= "register-wrap main_wrap" v-show="showRegister">
            <h3>邮箱注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <select v-model="selected">
                <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
            </select>
            <input type="text" placeholder="请输入邮箱" v-model="newUserEmail"></input>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model.lazy="newPassword">         
            <input type="password" placeholder="请确认密码" v-model.lazy="checkPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToPhoneRegeiter">手机号注册</span>
              <br>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
            
        </div>

        <div class="register-wrap main_wrap" v-show="showPhoneRegister">
           <h3>手机号注册</h3>
           <p v-show="showTishi1">{{tishi1}}</p>
           <input type="text" placeholder="请输入手机号" v-model="telphone"></input>
           <button v-on:click="sendCode">发送验证码</button>
           <input type="text" placeholder="请输入验证码" v-model="Pcode"></input>
           <button v-on:click="PhoneRegister">注册</button>
           <span v-on:click="ToRegister">邮箱注册</span>
           <br>
           <span v-on:click="ToLogin">已有账号？马上登录</span>
       </div>
    </div>
</template>

<style>
    .lg_bd{
        background: url("./400066846_banner.jpg");
        min-height: 540px;
        overflow: hidden;
    }
    .main_wrap{
        float: right;
        width: 380px;
        padding: 15px;
        min-height: 400px;
        background: #fff;
        margin-right: 240px;
        margin-top: 40px;
        text-align:center;
    }
    input.r_radio{
        height: 0;
        line-height:40px;
        padding: 0;
    }
    .main_wrap select{
        height: 22px;
        margin-bottom: 5px;
    }
/*	.login-wrap{text-align:center;}
    .register-wrap{text-align: center;}*/
    .lg_bd input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    .lg_bd p{color:red;}
    .lg_bd button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    .lg_bd span{cursor:pointer;}
    .lg_bd span:hover{color:#41b883;}
</style>

<script>  
    import {setCookie,getCookie} from '../../assets/js/cookies.js'
    var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; 
    var xml_data=[{"username":"aaa"}]
    const url = 'http://10.141.1.206:8080/pension/user/login'
    export default{
        // mounted(){
        //     if(getCookie('username')){
                
        //     }
        // },
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                showTishi1:false,
                showPhoneRegister: false,
                tishi: '',
                tishi1:'',
                username: '',
                password: '',
                newUsername: '',
                newPassword: '',
                selected:'user',
                options:[
                    {text:'个人用户',value:'user'},
                    {text:'机构用户',value:'agencyuser'}
                ]
            }
        },
        computed:{
            passwordValidate:function(){
                var errorText;
                if (!/^[0-9A-Za-z]{6,15}$/.test(this.newPassword)) {
                    errorText = '密码少于六位'
                }else{
                    errorText = ''
                }
            }
        },
        methods:{
            ToRegister(){
               this.showRegister = true,
               this.showLogin = false,
               this.showPhoneRegister = false   
            },
            ToLogin(){
                this.showLogin = true,
                this.showRegister = false,    
                this.showPhoneRegister = false
            },
            ToPhoneRegeiter(){
                this.showPhoneRegister = true,
                this.showRegister = false,
                
                this.showLogin = false
            },
            login(){
                 if(this.username == "" || this.password == ""){
                        alert("请输入用户名或密码")
                }else{
                  /*  $.ajax({
                        url: 'http://10.141.1.206:8080/pension/user/test',
                        data:JSON.stringify(xml_data),
                        type: 'get',
                        cache:false,
                        contentType: "application/json;charset=utf-8", 
                        // dataType:'json',
                        success:function(msg){  
                            alert(msg);  
                        }  
                    })
                     this.axios.get("http://10.141.1.206:8080/pension/user/test",{username:'aaa'}).then((res)=>{console.log(res.data)})*/
                    let params = {
                            username: this.username,
                            password: this.password
                    }
                    this.axios.post("http://10.141.1.206:8080/pension/user/login",JSON.stringify(params)).then((res)=>{
                        console.log(res)
                        console.log(typeof res.data)
                        if (res.data == -1) {
                            this.tishi = "用户不存在",
                            this.showTishi = true
                        }else if(res.data == 0){
                            this.tishi = '密码错误',
                            this.showTishi = true
                        }else if (res.data == 1){
                            this.tishi = '登录成功',
                            this.showTishi = true
                            setCookie('username',this.username,1000*60),
                            setTimeout(function(){
                                  this.$router.push('/home')
                              }.bind(this),1000)
                        }else if(res.data == 4){
                            this.tishi == '管理员登录',
                            this.showTishi == true
                        }
                    })
                }
            },
            register(){
                 if(this.newUsername == "" || this.newPassword == ""){
                        alert("请输入用户名或密码")
                }else if(!/^[0-9A-Za-z]{6,15}$/.test(this.newPassword)){
                    alert("密码长度不得低于6位")
                }else if(this.newPassword !== this.checkPassword){
                    alert("两次密码不匹配")
                }else if(this.newUserEmail == ""){
                    alert("邮箱不得为空")
                }else if(!regEmail.test(this.newUserEmail)){
                    alert("邮箱格式不正确")
                }else{
                    let params = {
                        username:this.newUsername,
                        password:this.newPassword,
                        email: this.newUserEmail,
                        userlevel:this.selected
                    }
                    this.axios.post("http://10.141.1.206:8080/pension/user/regist",params).then((res)=>{
                        console.log(res)
                        console.log(typeof res.data)
                        if (res.data == 1) {
                            this.tishi = "注册成功",
                            this.showTishi = true,
                            this.showRegister= false,
                            this.showLogin=true
                        }else if(res.data == -1){
                            this.tishi = "用户名已存在"
                            this.showTishi = true
                        }else if(res.data == 0){
                            this.tishi = "邮箱已存在"
                            this.showTishi = true
                        }

                })
            }
        },
        sendCode(){
            let params = {
                telphone:this.telphone
            }
            this.axios.post('http://10.141.1.206:8080/pension/user/mobilecode',params).then((res)=>{
                console.log(res.data)
                setCookie('code',res.data.code,1000*60)
                console.log(res.data.code)
            })
        },
        PhoneRegister(){
            let code = getCookie('code')
            console.log(code)
            if (code == this.Pcode) {
                this.tishi1="注册成功",
                this.showTishi1=true
            }else{
                console.log(this.Pcode)
            }
        }
    }
}
</script>
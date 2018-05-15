<template>
	<div class="b_main1">
		<div class="left_side1">
			<p class="el-icon-setting">系统菜单栏</p>
			<el-menu 
								class="el-menu-vertical-demo"
								background-color="#2A3340"
							  text-color="#fff"
								active-text-color="#ffd04b">
			      <el-submenu index="1">
			        <template slot="title">
			          <i class="el-icon-share"></i>
			          <span>用户管理</span>
			        </template>
			        <el-submenu index="1-1">
			          <template slot="title">个人用户</template>
			          <el-menu-item index="1-1-1"><router-link to="/background/foo">用户信息</router-link></el-menu-item>
			        </el-submenu>
			        <el-submenu index="1-2">
			          <template slot="title">机构用户</template>
			          <el-menu-item index="1-2-1"><router-link to="/background/bar">机构信息</router-link></el-menu-item>
			        </el-submenu>
			      </el-submenu>
			      <el-submenu index="2">
			      
			       <span slot="title"><i class="el-icon-menu"></i>机构管理</span>
			      </el-submenu>
						<el-submenu index="3">
							<el-menu-item index=""></el-menu-item>
						</el-submenu>
			     <!-- <el-menu-item index="3" disabled>
			       <i class="el-icon-document"></i>
			       <span slot="title">导航三</span>
			     </el-menu-item>
			     <el-menu-item index="4">
			       <i class="el-icon-setting"></i>
			       <span slot="title">导航四</span>
			     </el-menu-item> -->
	   		 </el-menu>
		</div>
			<div class="back_info">
				<div class="el-icon-location"><span>您当前的位置:{{ locate }}</span></div>
				<div class="B_tips">
					<p>{{ date | formatDate }}</p>
				</div>
			</div>
		<div class="right_side1">
		
			<router-view></router-view>
		</div>
	</div>
</template>

<style scoped>
	.b_main1{
		width: 100%;
	}
	.back_info{
		background-color: #fff;
		min-height: 22px;
		border: 1px solid #BEC1C2;
	}
	.left_side1{
		width: 17%;
		height: 1400px;
		padding-top: 10px;
		background-color: #2A3340;
		float: left;
		color: white;
	}
	.right_side1{
		width: 83%;
		height: 1400px;
		float: right;
		padding-top: 10px;
		padding-left: 20px;
		padding-right: 20px;
		background-color: #EDF7F9;
	}
	.left_side1 .el-submenu .el-menu-item{
		min-width: 160px;
	}
	.el-submenu{
		border-top: 1px solid gray;
	}
	.el-menu-item{
		font-size: 12px;
		padding-left: 0px;
	}
	a{
		color:#fff;
	}
	a:hover{
		text-decoration: none;
		color: #f60;
	}
	a:active{
		text-decoration: none;
		color: #f60;
	}
</style>

<script>
		var padDate= function(value){
		return value<10?'0'+value:value;
	};
	export default{
		 data(){
				return{
					date: new Date(),
					locate: '首页'
			}
		},
		filters:{
			formatDate:function(value){
				var date = new Date();
				var year = date.getFullYear();
                var month = padDate(date.getMonth()+1);
                var day = padDate(date.getHours());
                var hours = padDate(date.getHours());
                var minutes = padDate(date.getMinutes());
                var seconds = padDate(date.getSeconds());
                return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
			}
		},
		mounted: function(){
			var _this = this;
			this.timer = setInterval(function(){
				_this.date = new Date();
			},1000);
		},
		beforeDestory:function(){
			if(this.timer){
				clearInterval(this.timer);
			}
		}
	}
</script>
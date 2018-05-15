<template>
	<div class="base_nav">
		<el-menu  class="el-menu-demo menu_left" mode="horizontal" background-color="#2577e3" text-color="#fff" active-text-color="#f60">	
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="2">养老机构</el-menu-item>
			<el-menu-item index="3">招聘信息</el-menu-item>
			<el-submenu index="4">
				<template slot="title">城市</template>
				<el-menu-item index="4-1">北京</el-menu-item>
				<el-menu-item index="4-2">上海</el-menu-item>
			</el-submenu>
		</el-menu>
		<div class="cui_subway_internal">
			<p class="nav_title">热门城市选择</p>
			<ul id="v-for-object" class="nav nav-pills">	
				<li v-for="city in citys"><router-link to=''>{{ city.message }}</router-link></li>
			</ul>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				citys:[
				{ message: '北京'},
				{ message: '上海'},
				{ message: '重庆'},
				{ message: '河北'},
				{ message: '山西'},
				{ message: '辽宁'},
				{ message: '吉林'},
				{ message: '黑龙江'},
				{ message: '内蒙谷'},
				{ message: '江苏'},
				{ message: '浙江'},
				{ message: '安徽'},
				{ message: '福建'},
				{ message: '江西'},
				{ message: '山东'},
				{ message: '湖北'},
				{ message: '湖南'},
				{ message: '广东'},
				{ message: '海南'},
				{ message: '河南'},
				{ message: '四川'},
			]
			}
		}
	}
</script>

<style>
	.menu_left{
		padding-left: 80px;
	}
	.base_nav{
		width: 100%;
	}
	.cui_subway_internal{
		padding-left: 95px;
	}
	.nav_title{
		float: left;
		margin-top: 10px;
		margin-left: 5px;
		margin-right: 5px;
	}
	.cui_subway_internal li a{
		padding: 10px 5px 5px;
	}

</style>
<template>
	<div class="B_banner1">
		<el-row>
			<el-col :span="3"><div>logo</div></el-col>	
			<el-col :span="9"><p>养老网后台管理系统</p></el-col>	
			<el-col :span="3">
				<p class="el-icon-location"></p>
				<router-link to="/background/background_index"><span>系统首页</span></router-link>
			</el-col>
			<el-col :span="2">
				<p class="el-icon-setting"></p>
				<span>设置</span>
			</el-col>
			<el-col :span="2">
				<p class="el-icon-refresh"></p>
				<span>刷新</span>
			</el-col>
			<el-col :span="2">
				<p class="el-icon-circle-close-outline"></p>
				<span>退出</span>
			</el-col>
			<el-col :span="3">
				<span>用户: {{ name }}</span>	
			</el-col>		
		</el-row>	
		<!-- <div class="B_tips">
			<p>{{ date | formatDate }}</p>
		</div> -->
	</div>
</template>

<style>
	.B_banner1{
		height: 80px;
		width:100%;
		font-size: 24px;
		/* border:1px solid #f60; */
		text-align: left;
		padding:20px 20px;
		background-color: #0aA1BB;
		color: white;
	}
	.B_tips{
		width: 100%;
		height: 16px;
		font-size: 10px;
	}
</style>

<script>
export default{
	data () {
		return {
			name: 'admin'
		}
	}
}
</script>
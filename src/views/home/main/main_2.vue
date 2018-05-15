<template>
	<div class="mod">
		<el-tabs v-model="activeName" @tab-click="handleClick" class="recruit_info">
		    <el-tab-pane label="招聘" name="first">
		    	<R_content_1></R_content_1>
		    </el-tab-pane>
		</el-tabs>
	</div>
</template>

<style>
	.recruit_info .el-tabs__header{
		margin: 0;
	}
</style>

<script>
	import r_content_1 from "../main/recruit_content.vue"

	export default{
		components:{
			"R_content_1" : r_content_1
		}
	}
</script>
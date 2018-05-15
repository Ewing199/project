<template>
	<div class="mod">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="北京" name="first">
		    	<M_content_1></M_content_1>
		    </el-tab-pane>
		    <el-tab-pane label="上海" name="second">上海</el-tab-pane>
		    <el-tab-pane label="广州" name="third">广州</el-tab-pane>
		    <el-tab-pane label="南京" name="fourth">南京</el-tab-pane>
	  	</el-tabs>
	</div>
</template>

<style>
	.mod{
		margin-left: 80px;
		margin-top: 20px;
		margin-right: 80px;
		height: 390px;
	}
</style>

<script>
import m_content_1 from "../main/main_content.vue"
  export default {
  	components: {
             "M_content_1" : m_content_1,
    },
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>


<template>
	<div>
		<div class="s_main">
			<el-form label-width="80px" :inline="true"> 
				<el-form-item label="用户ID" >
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="用户姓名" >
					<el-input></el-input>
				</el-form-item>
				<el-form-item>
				   <el-button type="primary" @click="onSubmit">查询</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="s_content">
			<el-table :data="tableData" style="width: 100%" stripe="true" border="true" show-header="true">
				<el-table-column
			      type="selection"
			      width="40">
			    </el-table-column>
		      	<el-table-column
		      	header-align="center"
		        prop="user_id"
		        label="ID"
		        width="40">
		     	</el-table-column>
		     	<el-table-column
		        prop="user_name"
		        label="用户名"
		        width="65">
		      	</el-table-column>
		        <el-table-column
		        header-align="center"
		        prop="address"
		        label="邮箱"
		        width="">
		      	</el-table-column>
		      	<el-table-column
		      	header-align="center"
		        prop="old_id"
		        label="老人ID"
		        width="100">
		      	</el-table-column>
		      	<el-table-column
		      	header-align="center"
		        prop="status"
		        label="激活状态"
		        width="100">
		      	</el-table-column>
		       <el-table-column
		       header-align="center"
			    fixed="right"
			    label="操作"
			    width="100">
			        <template slot-scope="scope">
			       		<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			       	 	<el-button type="text" size="small">编辑</el-button>
				    </template>
			    </el-table-column>
		    </el-table>

		</div>
	</div>
</template>

<style>
	.s_title{
		height: 22px;
		background-color: #D2E9FF;
	}
	.s_main{
		padding-top: 20px;
		background-color: #E2E9EE;
	}
</style>

<script>
	export default{
		methods:{
			handleClick(row){
				console.log(row);
			}
		},
		data(){
			return {
			tableData: [{
	        user_id: '01',
	        user_name: '王小虎',
	        address: '123467@cc.com',
	        old_id: '01_2',
	        status: '0'
	        },
	        {
	        user_id: '01',
	        user_name: '王小虎',
	        address: '123467@cc.com',
	        old_id: '01_2',
	        status: '0'
	        },
	        {
	        user_id: '01',
	        user_name: '王小虎',
	        address: '123467@cc.com',
	        old_id: '01_2',
	        status: '0'
	        }
			]
		}
	}
}
</script>
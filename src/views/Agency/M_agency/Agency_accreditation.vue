<template>
	<div>
		<el-button type="primary" size="small" @click="ToShow">刷新</el-button>
		<el-table
			:data="agency_accredata"
			border
			style="width: 100%">
			<el-table-column
					prop="agencyname"
					label="机构名称"
					width="120">
			</el-table-column>
				<el-table-column
					prop="creater"
					label="联系人"
					width="120">
				</el-table-column>
			<!-- <el-table-column
					prop="agency_phone"
					label="手机号"
					width="180">
				</el-table-column> -->
			<el-table-column
					prop="charter"
					label="营业执照"
					width="120">
				</el-table-column>
			<el-table-column
					prop="state"
					label="状态"
					:formatter="formatState"
					width="120">
			</el-table-column>
		 	<el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">审核</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
			<!-- <el-table-column
					fixed="right"
					label="操作"
					width="180">
				<el-button type="danger" size="small">删除</el-button>
        		<el-button type="success" size="small">审核</el-button>
			</el-table-column> -->
			</el-table>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				agency_accredata: [],
				aaaa: true
				//  agency_accredata:[{
				// 	agency_name: '123',
				// 	agency_user: 'aaa',
				// 	agency_quanlification: '111',
				// 	agency_status: '待审核'

				// }],
				// agency_accredata: agency_info
			}
		},
		methods:{
			formatState: function(row,column){
				return row.state == false ? '待审核' : row.state == true ? '已审核' : '未知' ;
			},
			handleDelete: function(index,row){
				this.$confirm('确认删除该记录吗','提示',{
					type:'warning'
				}).then(()=>{
					let para={
						ids:7
					};
					this.axios.post("http://10.141.1.206:8080/pension/agency/deleteAgency",para).then((res)=>{
						console.log(res)
						let msg = res.data.msg
						alert(msg)
						// if(res.data.status == "1025"){
						// 		alert(msg)
						// }else if(res.data.status == "1026"){
						// 	alert()
						// }
					})
				})
			},
			handleEdit:function(index,row){
				this.axios.post().then((res)=>{
					console.log(res)
				})
			},
			ToShow(){
				let params = {
					userid : 1
				}
				this.axios.post("http://10.141.1.206:8080/pension/agency/queryAgency",params).then((res)=>{
					console.log(res)
					// let agency_accredata = this.$data.agency_accredata
					// console.log(res.data.data[0].address)
					// let agency_info = res.data.data[0]
					// let agency_information = {
					// 	agency_accredata.agency_name : agency_info.agencyname,
					// 	agency_accredata.agency_user : agency_info.creater,
					// 	agency_accredata.agency_quanlification : agency_info.agencyquality,
					// 	agency_accredata.agency_status : agency_info.state
					// }
					// agency_accredata.agency_name = agency_info.agencyname,
					// agency_accredata.agency_user = agency_info.creater,
					// agency_accredata.agency_quanlification = agency_info.agencyquality,
					// agency_accredata.agency_status = agency_info.state
					this.agency_accredata = res.data.data
					// console.log(agency_accredata)
					// this.agency_accredata.agency_name = agency_information.agency_name
					// this.agency_accredata.agency_user = agency_information.agency_user
					// this.agency_accredata.agency_quanlification = agency_information.agency_quanlification
					// this.agency_accredata.agency_status = agency_information.agency_status
				})
				// console.log(agency_info)
			}
		},
		mounted(){
			this.ToShow();
		}
	}
</script>
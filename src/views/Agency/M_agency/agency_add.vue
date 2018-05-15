<template>
	<div>
		<el-tabs type="border-card">
			<!-- <el-tab-pane>
				<span slot="label">机构列表</span>
				<div class="agency_list">
					avsc
				</div>
			</el-tab-pane> -->
			<el-tab-pane>
				<span slot="label">机构添加</span>
				<div class="agency_add">
					<el-steps :active="active" finish-status="success" align-center>
					  <el-step title="步骤 1"></el-step>
					  <el-step title="步骤 2"></el-step>
					  <el-step title="步骤 3"></el-step>
					</el-steps>
						<div class="agency_info">
							<p class="el-icon-edit-outline">基本信息</p>
							<div class="form_agency_info">
								<el-form label-width="130px" :rules="rules" size="middle" ref="agency_form" :model="agency_form">
									<el-form-item prop="selectedOptions">
										<span slot="label">所在地区</span>
										<el-cascader
											:options="options"
											v-model="agency_form.selectedOptions"
											@change="handleChange">
										</el-cascader>
									</el-form-item>
									<el-form-item prop="agency_name">
									  	<span slot="label">机构名称</span>
									  	<el-col :span="12">
									    	<el-input v-model="agency_form.agency_name" clearable></el-input>
									    </el-col>
									</el-form-item>
									<el-form-item prop="agency_address">
									  	<span slot="label">机构地址</span>
									  	<el-col :span="12">
									    	<el-input v-model="agency_form.agency_address" clearable></el-input>
									    </el-col>
									</el-form-item>
									<el-form-item prop="agency_charter">
									  	<span slot="label">营业执照注册号</span>
									  	<el-col :span="12">
									    	<el-input v-model="agency_form.agency_charter" clearable></el-input>
									    </el-col>
									</el-form-item>
									<el-form-item prop="agency_type">
										<span slot="label">机构类型</span>
										<el-radio-group v-model="agency_form.agency_type">
											<el-radio label="1">养老院</el-radio>
											<el-radio label="2">敬老院</el-radio>
											<el-radio label="3">老年公寓</el-radio>
											<el-radio label="4">护理院</el-radio>
											<el-radio label="5">疗养院</el-radio>
											<el-radio label="6">养老照料中心</el-radio>
											<el-radio label="7">养老社区</el-radio>
											<el-radio label="8">福利院</el-radio>
											<el-radio label="9">其他</el-radio>
										</el-radio-group>
									</el-form-item>
									<el-form-item prop="agency_nature">
										<span slot="label">机构性质</span>
										<el-radio-group v-model="agency_form.agency_nature">
											<el-radio label="1">公办</el-radio>
											<el-radio label="2">民办</el-radio>
											<el-radio label="3">民办公助</el-radio>
											<el-radio label="4">公建民营</el-radio>
										</el-radio-group>
									</el-form-item>
									<el-form-item prop="agency_boss">
									  	<span slot="label">负责人</span>
									  	<el-col :span="6">
									    	<el-input v-model="agency_form.agency_boss"></el-input>
									    </el-col>
									</el-form-item>
									<el-form-item prop="agency_date">
									  	<span slot="label">开业时间</span>
									  	<el-col :span="6">
									  		<el-input  v-model="agency_form.agency_date" ></el-input>
									    	<!--  <el-date-picker
											      v-model="agency_form.agency_date"
											      type="date"
											      placeholder="选择日期">
											    </el-date-picker> -->
									    </el-col>
									</el-form-item>
									<el-form-item prop="agency_size">
										<span slot="label">占地面积</span>
										<el-col :span="6">
										<el-input v-model="agency_form.agency_size"></el-input>
										</el-col>
									</el-form-item>
									<el-form-item prop="agency_size1">
										<span slot="label">建筑面积</span>
										<el-col :span="6">
										<el-input v-model="agency_form.agency_size1"></el-input>
										</el-col>
									</el-form-item>
									<el-form-item prop="agency_bed">
										<span slot="label">床位数</span>
										<el-col :span="6">
										<el-input v-model="agency_form.agency_bed"></el-input>
										</el-col>
									</el-form-item>
									<el-form-item prop="agency_bed_available">
										<span slot="label">剩余床位数</span>
										<el-col :span="6">
											<el-input v-model="agency_form.agency_bed_available"></el-input>
										</el-col>
									</el-form-item>
									<el-form-item prop="agency_user_type">
										<span slot="label">收住对象</span>
										<el-col :span="12">
										<el-radio-group v-model="agency_form.agency_user_type">
										    <el-radio label="1">自理</el-radio>
										    <el-radio label="2">半自理/介助</el-radio>
										    <el-radio label="3">不能自理/介护</el-radio>
										    <el-radio label="4">特护</el-radio>   
										</el-radio-group>
										</el-col>
										 <i>收住对象不能为空白</i>
									</el-form-item>
									<el-form-item prop="agency_price">
										<span slot="label">收费区间</span>
										<el-col :span="3">
											<el-input v-model="agency_form.agency_price_min"></el-input>		
										</el-col>
										<el-col :span="1">
											——————		
										</el-col>
										<el-col :span="3">
											<el-input v-model="agency_form.agency_price_max"></el-input>		
										</el-col>
									</el-form-item>
									<!-- <el-form-item prop="agency_isstatus">
										<span slot="label">医疗定点资格</span>
										<el-col :span="3">
										<el-radio-group v-model="agency_form.agency_isstatus">
											<el-radio label="是" value="true"></el-radio>
											<el-radio label="否" value="false"></el-radio>
										</el-radio-group>
										</el-col>
									</el-form-item>
									<el-form-item prop="agency_locate">
										<span slot="label">接受异地老人</span>
										<el-col :span="3">
										<el-radio-group v-model="agency_form.isreceive">
											<el-radio label="是" value="true"></el-radio>
											<el-radio label="否" value="false"></el-radio>
										</el-radio-group>
										</el-col>
									</el-form-item> -->
									<el-form-item>
									
										<!-- <el-button type="primary" @click="onSubmit()">立即创建</el-button> -->
										<el-button type="primary" @click="submitForm('agency_form')">立即创建</el-button>
										<el-button @click="resetForm('agency_form')">重置</el-button>
									</el-form-item>
								</el-form>
							</div>
						</div>
					<el-button style="margin-top: 12px;" @click="next" v-show="shownext">下一步</el-button>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>


<style scoped>
	.agency_info{
		text-align: left;
		margin-top: 20px;
		padding-left: 5%;
	}
	.agency_info p{
		margin-right: 15px;
	}
	.form_agency_info{
		border-top: 2px solid #D5D5D5;
	}
	.form_agency_info .el-form-item span{
		padding-right: 20px;
	}
	.form_agency_info .el-form-item{
		margin-top: 35px;
	}
	.el-form-item i{
		color: #F56C6C;
	}
</style>
<script>
	import { regionData } from 'element-china-area-data'

	export default{
		data(){
			return {
				active:0,
				shownext: false,
				agency_form:{
					selectedOptions:[],
					agency_name:'',
					agency_address:'',
					agency_type: 0,
					agency_nature:'',
					agency_boss:'',
					agency_date:'',
					agency_size:'',
					agency_size1:'',
					agency_bed:'',
					agency_bed_available:'',
					agency_user_type:'',
					agency_price_min:'',
					agency_price_max:'',
					agency_useful:'',
					agency_locate:'',
					agency_charter:''
				},
				rules:{
						agency_name:[
							{ required:true, message:'请输入机构名' , trigger: 'blur'},
							{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
						],
						agency_type:[
							{ required:true,message:'请选择一个类型',trigger:'change'}
						],
						agency_nature:[
							{ required:true,message:'请选择机构的性质',trigger:'change'}
						],
						agency_boss:[
							{ required:true,message:'请输入机构负责人',trigger:'blur'},
							{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
						],
						// agency_date:[
						// 	{ required: true, message: '请选择日期', trigger: 'change' }
						// ],
						agency_size:[
							{ required:true,message:'请输入占地面积',trigger:'blur' }
						],
						agency_size1:[
							{ required:true,message:'请输入建筑面积',trigger:'blur' }
						],
						agency_bed:[
							{ required:true,message:'请输入床位数',trigger:'blur'}
						],
						agency_bed_available:[
							{ required:true,message:'请输入剩余床位数',trigger:'blur'}
						],
						agency_user_type:[
							{ required:true,message:'请选择收住的对象',trigger:'change'}
						],
						agency_price_min:[
							{ required:true,message:'请输入剩余床位数',trigger:'blur'}
						],
						agency_price_max:[
							{ required:true,message:'请输入剩余床位数',trigger:'blur'}
						],
						agency_useful:[
							{ required:true,message:'请选择是否具备医疗定点资格',trigger:'change'}
						],
						agency_locate:[
							{ required:true,message:'请选择是否接受异地老人',trigger:'change'}
						],
						agency_charter:[
							{ required:true,message:'请填写营业执照注册号',trigger:'change'}
						],
					},
					options: regionData
			
			};
		},
		methods:{
			submitForm(formName){
				this.$refs[formName].validate((valid)=>{
					if(valid){
						let formbody = this.agency_form
						let params = {
							agencyname : formbody.agency_name,
							agencytype : parseInt(formbody.agency_type),
							creater : formbody.agency_boss,
							agencyquality : parseInt(formbody.agency_nature),
							foundedtime : formbody.agency_date,
							area : formbody.agency_size,
							bednum : parseInt(formbody.agency_bed),
							restnum :  parseInt(formbody.agency_bed_available),
							serviceobject : parseInt(formbody.agency_user_type),
							minprice :  parseFloat(formbody.agency_price_min),
							maxprice : parseFloat(formbody.agency_price_max),
							address: formbody.agency_address,
							// area1:formbody.selectedOptions,
							charter:formbody.agency_charter
						}
						console.log(params)
						this.axios.post("http://10.141.1.206:8080/pension/agency/addAgency",params).then((res)=>{
							console.log(res)
							console.log(typeof res.data)
							if(res.data == 1){
								alert('等待申请')
							}else if(res.data == "1041"){
								alert('注册失败')
							}else if(res.data.status == "1040"){
								this.shownext == true
							}
						})
					}else{
						console.log('error submit');
						return false;
					}
				});
			},
			// onSubmit(){
			// 	let formbody = this.agency_form
			// 	let params = {
			// 		agencyname : formbody.agency_name,
			// 		agencytype : formbody.agency_type,
			// 		creater : formbody.agency_boss,
			// 		agencyquality : formbody.agency_nature,
			// 		foundedtime : formbody.agency_date,
			// 		area : formbody.agency_size,
			// 		bednum : formbody.agency_bed,
			// 		restnum :  formbody.agency_bed_available,
			// 		serviceobject : formbody.agency_user_type,
			// 		minprice :  formbody.agency_price_min,
			// 		maxprice : formbody.agency_price_max,
			// 		address: formbody.agency_address,
			// 		area:formbody.selectedOptions
			// 	}
			// 	console.log(params)

			// 	this.$refs[formName].validate((valid)=>{
			// 	if(valid){
			// 		this.axios.post("http://10.141.1.206:8080/pension/agency/addAgency",JSON.stringify(params)).then((res)=>{
			// 			console.log(res)
			// 			console.log(typeof res.data)
			// 			if(res.data == 1){
			// 				alert('等待申请')
			// 			}else if(res.data == 0){
			// 				alert('注册失败')
			// 			}
			// 		})
			// 	}else{
			// 			console.log('error submit');
			// 			return false;
			// 		}
			// 	});
			// },
		 	handleChange(value) {
		        console.log(value);
		    },
			resetForm(formName) {
		        this.$refs[formName].resetFields();
		      },
			next(){
				this.active ++
				if (this.active > 2) {
					this.active = 0;
				}else{
					alert("等待审核")
				}
			}
		}
	}
</script>
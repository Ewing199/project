<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane>
					<span slot="label">职位信息</span>
					<div class="recruit_info">
						<el-form label-width="120px" ref="recruit_form" :model="recruit_form">
							<el-form-item prop="name">
								<span slot="label">职位名称</span>
								<el-col :span="6">
									<el-input v-model="recruit_form.name"></el-input>
								</el-col>
							</el-form-item>
							<el-form-item prop="type">
								<span slot="label">职位类别</span>
								<el-col :span="6">
									<el-input v-model="recruit_form.type"></el-input>
								</el-col>
							</el-form-item>
							<el-form-item prop="number">
								<span slot="label">招聘人数</span>
								<el-col :span="6">
									<el-input v-model="recruit_form.number"></el-input>
								</el-col>
								<el-col :span="1">人</el-col>
							</el-form-item>
							<el-form-item prop="salary">
								<span slot="label">工资</span>
								<el-col :span="6">
									<el-input v-model="recruit_form.minsalary"></el-input>
								</el-col>
								<el-col :span="1">至</el-col>
								<el-col :span="6">
									<el-input v-model="recruit_form.maxsalary"></el-input>
								</el-col>
								<el-col :span="1">元/月</el-col>
								<el-col :span="3">
									<el-checkbox v-model="recruit_form.checked">面议</el-checkbox>
								</el-col>
							</el-form-item>
							<el-form-item prop="welfare">
								<span slot="label">职位福利</span>
								<el-col :span="24">
									<el-checkbox v-model="recruit_form.welfare1" label="五险一金" border></el-checkbox>
    								<el-checkbox v-model="recruit_form.welfare2" label="包住" border></el-checkbox>
    								<el-checkbox v-model="recruit_form.welfare3" label="包吃" border></el-checkbox>
    								<el-checkbox v-model="recruit_form.welfare4" label="年底双薪" border></el-checkbox>
    								<el-checkbox v-model="recruit_form.welfare5" label="周末双休" border></el-checkbox>
    								<el-checkbox v-model="recruit_form.welfare6" label="交通补助" border></el-checkbox>
    								<el-checkbox v-model="recruit_form.welfare7" label="加班补助" border></el-checkbox>
    								<el-checkbox v-model="recruit_form.welfare8" label="饭补" border></el-checkbox>
    								</el-col>
								<el-col :span="5">
									<el-checkbox v-model="recruit_form.welfare9" label="话补" border></el-checkbox>
									<el-checkbox v-model="recruit_form.welfare10" label="房补" border></el-checkbox>
 								</el-col>
     							<el-col :span="6">
     								<el-input v-model="recruit_form.welfare_add" placeholder="最多输入六个字">
    									 <el-button slot="append">添加</el-button>
    								</el-input>
     							</el-col>
							</el-form-item>
							<el-form-item prop="quanlification">
								<span slot="label">学历要求</span>
								<el-col :span="10">
									<el-radio-group v-model="recruit_form.quanlification1">
										<el-radio v-for="quanlification1 in items" :value="quanlification1.value" :label="quanlification1.label" :key="quanlification1.value" border></el-radio>
									</el-radio-group>
									
									<!-- <el-radio v-model="recruit_form.quanlification" label="1" border>高中</el-radio>
									<el-radio v-model="recruit_form.quanlification" label="2" border>中专</el-radio>
									<el-radio v-model="recruit_form.quanlification" label="3" border>高中</el-radio> -->
								</el-col>
								<el-col :span="4">
								  	<el-select v-model="recruit_form.quanlification2" placeholder="更多">
									    <el-option
									      v-for="quanlification in options"
									      :key="quanlification.value"
									      :label="quanlification.label"
									      :value="quanlification.value">
									    </el-option>
									</el-select>
								</el-col>
							</el-form-item>
							<el-form-item prop="year">
								<span slot="label">工作年限</span>
								<el-col :span="11">
									<el-radio-group v-model="recruit_form.year1">
										<el-radio v-for="year1 in years1" :value="year1.value" :label="year1.label" :key="year1.value" border></el-radio>
									</el-radio-group>
									
									<!-- <el-radio v-model="recruit_form.quanlification" label="1" border>高中</el-radio>
									<el-radio v-model="recruit_form.quanlification" label="2" border>中专</el-radio>
									<el-radio v-model="recruit_form.quanlification" label="3" border>高中</el-radio> -->
								</el-col>
								<el-col :span="4">
								  	<el-select v-model="recruit_form.yaer2" placeholder="更多">
									    <el-option
									      v-for="year2 in years2"
									      :key="year2.value"
									      :label="year2.label"
									      :value="year2.value">
									    </el-option>
									</el-select>
								</el-col>
							</el-form-item>
							<el-form-item prop="address">
								<span slot="label">工作地址</span>
								<el-col :span="3">
									<el-input>工作地址</el-input>
								</el-col>
							</el-form-item>
							<el-form-item prop="describe">
								<span slot="label">职位描述</span>
								<el-col :span="12">
							    	<el-input type="textarea" v-model="recruit_form.describe"></el-input>
							    </el-col>
							 </el-form-item>
							 <el-form-item prop="tijiao">
							 	<el-button type="primary" @click="onSubmit">提交</el-button>
							 </el-form-item>
						</el-form>
					</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>


<style scoped>
	.recruit_info{
		padding-top: 40px;
	}
</style>

<script>
	export default{
		// props:{
		// 	name: String,
		// 	quanlification:String

		// },
		// methods:{
		// 	init(){
		// 		let props = this.$props
		// 		console.log(props)
		// 	}
		// },
		// mounted(){
		// 	this.init()
		// },
		methods:{
			onSubmit(){
			}
		},
		data(){
			return{
				recruit_form:{
					name:'',
					type:'',
					number:'',
					minsalary:'',
					maxsalary:'',
					checked: true,
					welfare1: true,
					quanlification1:'',
					quanlification2:''				
				},
				items:[{
					value:'buxian',
					label:'不限'
				},
				{
					value:'zhongzhaun',
					label:'中专'
				},
				{
					value:'jixiao',
					label:'技校'
				},
				{
					value:'gaozhong',
					label:'高中'
				}],
				options: [{
					value: 'benke',
					label: '本科'
				},
				{
					value:'shuoshi',
					label:'硕士'
				}],
				years1:[{
					value:'buxian',
					label:'不限'
				},
				{
					value:'yinian',
					label:'1年以下'
				},
				{
					value:'liangnian',
					label:'1-2年'
				},
				{
					value:'sannian',
					label:'3-5年'
				}
				],
				years2:[{
					value:'liunian',
					label:'6-7年'
				},
				{
					value:'shinian',
					label:'7-10年'
				},
				{
					value:'henduonian',
					label:'10年以上'
				}
				]
			}
		}
	}
</script>
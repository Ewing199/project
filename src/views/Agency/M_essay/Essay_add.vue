<template>
	<div class="essay_add">
		<p class="el-icon-warning">文章添加说明 :</p>
		<br>
		<span>1、必须是原创文章，文章字数不少于200字</span><br>
		<span>2、不能是机构介绍、产品介绍等广告类文章</span><br>
		<span>3、文章上传后版权归养老网所有</span><br>
		<span>4、不允许在文章内容插入任何广告链接（养老网站内链接除外），如有链接需求，可适当在文章末尾添加</span><br>
		
		<div class="essay_edit">
			<el-form ref="essay_form" :model="essay_form" label-width="80px">
				<el-form-item prop="essay_title">
					<p slot="label">文章标题</p>
					<el-col :span="6">
					<el-input v-model="essay_form.essay_title"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item prop="essay_type">
					<p slot="label">文章类型</p>
					<el-radio-group v-model="essay_form.essay_type">
						<el-radio label="养老院见闻"></el-radio>
						<el-radio label="养生保健"></el-radio>
						<el-radio label="照料护理"></el-radio>
						<el-radio label="管理心得"></el-radio>
						<el-radio label="行业分析"></el-radio>
						<el-radio label="老人生活"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop="essay_root">
					<p slot="label">来源</p>
					<el-col :span="6">
						<el-input v-model="essay_form.essay_root"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item prop="essay_author">
					<p slot="label">作者</p>
					<el-col :span="6">
						<el-input v-model="essay_form.essay_author"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item prop="essay_keyword">
					<p slot="label">关键词</p>
					<el-col :span="12">
						<el-input v-model="essay_form.essay_keyword"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item prop="essay_content">
					<p slot="label">文章内容</p>
					<el-col :span="18">
						<!-- <el-input  :autosize="{ minRows: 4, maxRows: 6}" type="textarea" v-model="essay_form.essay_content"></el-input> -->
					<!-- <weuiUEditor></weuiUEditor> -->
					
						<VueUEditor ueditorPath="../../../../static/ueditor1_4_3_3/" @ready="editorReady">
						</VueUEditor>
					</el-col>

				</el-form-item>

				<el-form-item>
				    <el-button type="primary">立即创建</el-button>
				    <el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<style scoped>
	.essay_add{
		text-align: left;
	}
	.essay_add span{
		color: #D9D9D9;
	}
	.essay_edit{
		margin-top: 20px;
	}
	.essay_edit p{
		font: 14px Arial,Verdana,Tahoma,Helvetica, sans-serif;
		text-align: center;
		padding-top: 10px;
	}
</style>

<script>
	import VueUEditor from 'vue-ueditor'

	export default{
		components:{
			VueUEditor
		},
		 methods:{
            editorReady(editorInstance){
              editorInstance.setContent('Hello world!<br>编辑初始化内容')
            }
        },
		data(){
			return {
				essay_form:{
					essay_title:'',	
					essay_type: ''
				}
			}
		}
	}
</script>
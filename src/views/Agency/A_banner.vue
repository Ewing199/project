<template>
	<div class="A_banner">
		<el-tabs tab-position="left" style="height: 100%;width:100%;" type="border-card">
				<el-tab-pane disabled>	
					<span slot="label">
						<p class="el-icon-document"><span>我的机构</span></p>
					</span>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>机构管理</span></p>
					</span>
					<Agency_list></Agency_list>
				</el-tab-pane>
			    <el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>添加机构</span></p>
					</span>
					<Agency_add></Agency_add>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>机构审核</span></p>
					</span>
					<Agency_accredit></Agency_accredit>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>机构评论</span></p>
					</span>
					<Agency_comments></Agency_comments>
				</el-tab-pane>
				<el-tab-pane disabled>	
					<span slot="label">
						<p class="el-icon-document"><span>我的文章</span></p>
					</span>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>文章管理</span></p>
					</span>
					cc
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>添加文章</span></p>
					</span>
					<Essay_add></Essay_add>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>文章评论</span></p>
					</span>
					cc
				</el-tab-pane>
				<el-tab-pane disabled>	
					<span slot="label">
						<p class="el-icon-document"><span>招聘信息</span></p>
					</span>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>发布招聘</span></p>
					</span>
					<Recruit_content></Recruit_content>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>招聘管理</span></p>
					</span>
					<Essay_add></Essay_add>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						<p class="el-icon-arrow-right"><span>应聘管理</span></p>
					</span>
					cc
				</el-tab-pane>
		</el-tabs>
		<!-- <div class="my_agency">
			<el-menu
				class="el-menu-vertical-demo">
				<p class="el-icon-document"><span>我的机构</span></p>
			</el-menu>
		</div> -->
	</div>
</template>

<style scoped>
	.my_agency{
		height: 200px;
		background-color:#F1F7FF;
		color: #000;
		text-align: left;
		padding-left: 25px;
	}
	.my_agency{
		border-top: 2px solid #026CA7;
	}
</style>

<script>
	import agency_add from '../Agency/M_agency/agency_add.vue'
	import agency_lsit from '../Agency/M_agency/Agency_list.vue'
	import agency_accreditation from '../Agency/M_agency/Agency_accreditation.vue'
	import agency_comments from '../Agency/M_agency/Agency_comments.vue'
	import essay_add from '../Agency/M_essay/Essay_add.vue'
	import recruit_content from '../Agency/M_recruit/recruit_content.vue'

	export default{
		components:{
			"Agency_add" : agency_add,
			"Agency_list" : agency_lsit,
			"Agency_accredit" : agency_accreditation,
			"Agency_comments" : agency_comments,
			"Essay_add" : essay_add,
			"Recruit_content" : recruit_content
		},
	}
</script>
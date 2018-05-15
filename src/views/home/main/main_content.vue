<template>
	<div class="mod_city">
		<el-row>
			<el-col :span="4" v-for="data in cards" :key="card">
				<el-card :body-style="{padding: '2px'}">
					<img v-bind:src="data.src">
					<div>
						<span>{{ data.title }}</span>
						<div>
							<span>{{ data.bedinfo }}</span>
							<span>{{ data.charge}}<small>起</small></span>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<style>
	.el-card img{
		height: 110px;
	}
	.mod_city{
		height: 390px;
		padding-left: 20px;
	}
	.mod_city .el-col{
		margin-right: 25px;
		margin-bottom: 10px;
	}
</style>

<script>
	export default{
		data(){
			return{
				cards:[
					{ 	title: '北京康乐养老院',
						src: './static/ylitem.jpg',
						bedinfo: '床位充足',
						charge: '¥1500'

					},
					{ 	title: '北京康乐养老院',
						src: './static/ylitem.jpg',
						bedinfo: '床位充足',
						charge: '¥1500'

					},
					{ 	title: '北京康乐养老院',
						src: './static/ylitem.jpg',
						bedinfo: '床位充足',
						charge: '¥1500'

					},
					{ 	title: '北京康乐养老院',
						src: './static/ylitem.jpg',
						bedinfo: '床位充足',
						charge: '¥1500'

					},
					{ 	title: '北京康乐养老院',
						src: './static/ylitem.jpg',
						bedinfo: '床位充足',
						charge: '¥1500'

					},
					{ 	
						title: '北京康乐养老院',
						src: './static/ylitem.jpg',
						bedinfo: '床位充足',
						charge: '¥1500'
					}
				]
			}
		}
	}
</script>
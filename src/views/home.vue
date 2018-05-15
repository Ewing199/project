<template>
	<div>
		<H_header></H_header>
		<H_nav></H_nav>
		<H_banner></H_banner>
		<H_main_1></H_main_1>
		<H_main_2></H_main_2>
	</div>
	
</template>


<style>
	.body{
		background-color: #f6f6f6;
	}
</style>
<script>
	import h_header from "../views/home/home_header.vue"
	import h_nav from "../views/home/nav_bar.vue"
	import h_banner from "../views/home/banner/banner.vue"
	import h_main_1 from "../views/home/main/main_1.vue"
	import h_main_2 from "../views/home/main/main_2.vue"

	export default{
		components: {
             "H_header" : h_header,
             "H_nav" : h_nav,
             "H_banner" : h_banner,
             "H_main_1" : h_main_1,
             "H_main_2" : h_main_2
		}
	}
</script>
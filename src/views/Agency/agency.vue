<template>
	<div class="Agency_index">
		<A_banner></A_banner>

<!-- 		<A_content></A_content> -->
	</div>
</template>


<style scoped>
	.Agency_index{
		padding: 40px 20px;
	}
</style>

<script>
	import a_banner from "../Agency/A_banner.vue"
	import a_content from  "../Agency/A_content.vue"

	export default{
		components:{
			"A_banner" : a_banner,
			"A_content" : a_content
		}
	}
</script>
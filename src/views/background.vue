<template>
    <div>
        <B_banner></B_banner>
        <B_main></B_main>
    </div>
</template>

<style>
    a{
		color:#fff;
	}
	a:hover{
		text-decoration: none;
		color: #f60;
	}
	a:active,a:link{
		text-decoration: none;
		color: #f60;
	}
</style>

<script>
    import b_banner from "../views/Background/banner.vue"
    import b_main from "../views/Background/b_main.vue"

    export default{
        components: {
             "B_banner" : b_banner,
             "B_main" : b_main
         }
    }
</script>
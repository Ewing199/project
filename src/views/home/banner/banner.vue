<template>
	<div>
		<div class="mod-banner">
			<img src="./img/img_1.jpg">
		</div>
		<div class="mod-search">
			<div class="searchbox"></div>
		</div>
	</div>
</template>

<style>
	.mod-banner{
		height: 340px;
		overflow: hidden;
	}
	.mod-banner img{
		margin-left: -30%;
	}
	.mod-search {
	    margin-top: -340px;
	    height: 340px;

	}
	.mod-search .searchbox{
	    position: absolute;
	    z-index: 12;
	    margin-top: 20px;
	    width: 580px;
	    height: 300px;
	    background-color: #fff;
	    box-shadow: 0 1px 5px rgba(0,0,0,.2);
	    left: 80px;
        padding: 25px 25px 25px 20px;
   		border-top: 3px solid #f99e3e;
	}
</style>
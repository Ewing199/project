<template>
    <div>
        <J_header></J_header> 
        <J_tips></J_tips>  
        <J_banner></J_banner>
    </div>
</template>

<script>
    import j_header from "../views/home/header.vue"
    import j_tips from "../views/home/tips-security.vue"
    import j_banner from "../views/login/login.vue"
    
    export default{
        components: {
             "J_header" : j_header,
             "J_tips"   : j_tips,
             "J_banner" : j_banner
         }
    }
</script>
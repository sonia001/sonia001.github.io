<template>
    <div class="container-fluid">
        <h3 style>Top {{title}} Movies</h3>
        </div>
</template>
<script>
export default {
    
    name:"Heading",
    props:{
        title:String,
    }
}
</script>
<style scoped>
.container-fluid{
    color:white;
    font-size:25px;
}
</style>
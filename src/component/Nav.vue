<template>
    <div class="container-fluid cont">
  <div class="row ">
      <router-link to="/"><h1 class="heading">MovieFlix</h1></router-link>
  </div>
  </div>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style scoped>
body{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}
.cont{
  background-color: rgb(34, 27, 27);
  color:rgb(216, 92, 92);
}
.heading{
    font-family: 'Goldman', cursive;
}
</style>
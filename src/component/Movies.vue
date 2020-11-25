<template>
               
             <div className="center-box" v-for="trend in trending" v-bind:key="trend.id">
                  <router-link :to="'/genre/' + trend.id">
                <img v-bind:src="url + trend.poster_path" alt="top" />
                 </router-link>
              </div>    
               
</template>

<script>
export default {
    name:"Movies",
    data(){
        return{
            url:"http://image.tmdb.org/t/p/w185"
        }
    },
    props:{
        trending:Object,
        title:String,
    },
    mounted(){
        this.trending
    }
}
</script>

<style scoped>
.center-box{
  width:100%;
  height:100%;
  padding:0 5px;
  transition: 1s;
}
.center-box:hover{
  transform:scale(1.1);
}
.center-box::-webkit-scrollbar{
  overflow: hidden;
}

</style>
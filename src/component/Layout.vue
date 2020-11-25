<template>
    <div>
        <Nav/>
        <Banner/>
        <Heading title="Trending"/>
        <div class="main-box">
            <Movies v-bind:trending="trending" />
        </div>
        <Heading title="Rated"/>
        <div class="main-box">
            <Movies v-bind:trending="top" />
        </div>
        <Heading title="Horror"/>
        <div class="main-box">
            <Movies v-bind:trending="horror" />
        </div>
        <Heading title="Animated"/>
        <div class="main-box">
            <Movies v-bind:trending="animated" />
        </div>
        <Heading title="Romantic"/>
        <div class="main-box">
            <Movies v-bind:trending="romantic" />
        </div>
        <Heading title="Scifi"/>
        <div class="main-box">
            <Movies v-bind:trending="scifi" />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Nav from "./Nav";
import Banner from "./Banner";
import Movies from "./Movies"
import Heading from "./Heading"
export default {
    name:"Layout",
    components:{
        Nav,
        Banner,
         Heading,
        Movies,
       
    },
     data(){
        return{
            trending:undefined,  
            top:undefined,
            horror:undefined,
            animated:undefined,
            romantic:undefined,
            scifi:undefined,
        }
    },
    mounted(){
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2b9911b777000a14126dc1f921515408")
        .then(result=>{
            
            this.trending=result.data.results;
        })

        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=2b9911b777000a14126dc1f921515408&language=en-US&page=1")
        .then(result=>{
            this.top=result.data.results;
        })

        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2b9911b777000a14126dc1f921515408&with_genres=27")
        .then(result=>{
            this.horror=result.data.results;
        })

        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2b9911b777000a14126dc1f921515408&with_genres=12")
        .then(result=>{
            this.animated=result.data.results;
        })

        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2b9911b777000a14126dc1f921515408&with_genres=10749")
        .then(result=>{
            this.romantic=result.data.results;
        })

        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2b9911b777000a14126dc1f921515408&with_genres=878")
        .then(result=>{
            this.scifi=result.data.results;
        })
    }
}
</script>

<style scoped>
.main-box{
  margin:10px 0;
  width:100%;
  height:45vh;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.main-box::-webkit-scrollbar{
  overflow: hidden;
}
</style>
<template>
    
                    <div className="card " v-if="info || videos">
                        <img v-bind:src="url + info.poster_path" alt="movie" className="img-fluid"/>
                        <div className="card-title my-2 ml-4">
                        <h5>{{info.title}}</h5>
                        <p className="h6 font-weight-normal">Release Date: {{info.release_date}}</p>
                        <p className="h6 font-weight-normal">{{info.runtime}} min</p>
                        </div>
                        <div className="card-body text-justify">
                        <p className="h6 font-weight-normal">{{info.overview}}</p>
                        <a v-bind:href="utube + videos" target="_blank"><button className="btn btn-outline-dark">Watch Trailor</button></a>
                        <a v-bind:href="info.homepage" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-dark ml-4"> Play </button></a>
                        <router-link to="/"><button className="btn btn-outline-dark ml-4"> Back </button></router-link>
                        </div>
                    </div>
             <ul v-else>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
            </ul>
</template>

<script>
import axios from "axios"
export default {
    name:"Details",
    data(){
      return{
           Id:undefined,
           info:undefined,
           videos:undefined,
           url:"http://image.tmdb.org/t/p/w342",
           utube:" https://www.youtube.com/watch?v=",
      }
    },
    mounted(){
        this.Id=this.$route.params.id;
        axios.get(`https://api.themoviedb.org/3/movie/${this.Id}?api_key=2b9911b777000a14126dc1f921515408&append_to_response=videos`)
        .then(result=>{
            this.info = result.data;
            this.videos = result.data.videos.results[0].key;
        })
    }
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    background: #ffeb3b
}

ul {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 50%);
    margin: 0;
    padding: 0;
    display: flex
}

ul li {
    list-style: none;
    width: 20px;
    height: 20px;
    background: #cea321;
    margin: 0 5px;
    border-radius: 50%;
    animation: animate 1.4s linear infinite
}

@keyframes animate {
    0% {
        transform: translateY(0)
    }

    60% {
        transform: translateY(0)
    }

    80% {
        transform: translateY(-20px)
    }

    100% {
        transform: translateY(0px)
    }
}

ul li:nth-child(1) {
    animation-delay: -1.2s
}

ul li:nth-child(2) {
    animation-delay: -1.0s
}

ul li:nth-child(3) {
    animation-delay: -.8s
}

ul li:nth-child(4) {
    animation-delay: -0.6s
}

</style>
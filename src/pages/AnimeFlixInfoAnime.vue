<template>
    <div class="div-info-anime-main" v-bind:style="imageBackground(anime.imageBackground)" >

    <Header />
    <section class="section-info-anime" >
        
        <div class="div-infoAnimes">
            <img :src="anime.image" alt="">
   
            <div class="div-info">
                <h1>{{ anime.title }}</h1>
                <h3>Sinopse</h3>
                <p class="sinopse-anime">{{ anime.sinopse }}</p>
            </div>
            
        </div>
    </section>

    </div>
    
</template>

<script>
import Header from './../components/AnimeFlixHeader'

export default {
    components: {
        Header
    },
    created() {
        console.log(this.$route.params.idanime);
    },
    computed: {
        anime() {
            return this.$store.getters.getAnimeFromId(this.$route.params.idanime, this.$route.params.categoryAnime);
        }
    },
    methods: {
         imageBackground(data) {
            return {
                background: `linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('${data}')`,
                backgroundSize: 'cover'
            }
         }
     }
    
}
</script>

<style scoped>

.div-info-anime-main {
    height: 100vh;
}

.section-info-anime {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    
}

.div-infoAnimes {
    display: flex;
}

.div-infoAnimes img {
    height: 82vh;
    margin-right: 40px;
}

.div-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.div-info h1 {
    background-color: #000;
    font-size: 50px;
    margin-bottom: 30px;
    border-radius: 20px;
    padding: 10px 30px;
}

.div-info h3 {
    background: rgb(167, 167, 167);
    padding: 5px 15px;
    border-radius: 3px;
    color: rgb(44, 44, 44);
}

.sinopse-anime {
    text-align: justify;
    background: #fff;
    color: #000;
    padding: 10px;
    border-radius: 3px;
    margin-top: 1px;
}
</style>
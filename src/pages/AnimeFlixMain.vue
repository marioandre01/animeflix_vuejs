<template>
    <div>
        <Header /> 
        <AnimeMain /> 
    </div>
</template>

<script>
import Header from './../components/AnimeFlixHeader'
import AnimeMain from './../components/AnimeFlixAnimeMain'

export default {
    components: {
        Header,
        AnimeMain
    },
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>

</style>
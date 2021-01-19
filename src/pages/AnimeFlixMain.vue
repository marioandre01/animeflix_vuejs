<template>
    <div>
        <Header /> 
        <AnimeMain /> 
        <Category 
            v-for="category in categoriesAnime" 
            v-bind:category="category.category" 
            v-bind:key="category.id" 
            v-bind:animes="category.animes" 
        />
    </div>
</template>

<script>
import Header from './../components/AnimeFlixHeader'
import AnimeMain from './../components/AnimeFlixAnimeMain'
import Category from './../components/AnimeFlixCategory'

import { mapGetters } from 'vuex'

export default {
    components: {
        Header,
        AnimeMain,
        Category
    },
    data() {
        return {
           
        }
    },
    computed: {
        ...mapGetters({
            categoriesAnime: 'getCategoriesAnime'  
        })
    }
}
</script>

<style scoped>

</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Main from './../pages/AnimeFlixMain'
import InfoAnime from './../pages/AnimeFlixInfoAnime'
import Animes from './../pages/AnimeFlixAnimes'
import Categories from './../pages/AnimeFlixCategories'
import About from './../pages/AnimeFlixAbout'
import Page404 from './../pages/AnimeFlix404'

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Main
    },
    {
        path: '/infoanime/:categoryAnime/:idanime',
        component: InfoAnime
    },
    {
        path: '/animes',
        component: Animes
    },
    {
        path: '/categorias',
        component: Categories
    },
    {
        path: '/sobre',
        component: About
    },
    {
        path: '*',
        component: Page404
    }]
})
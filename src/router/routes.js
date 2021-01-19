import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Main from './../pages/AnimeFlixMain'
import InfoAnime from './../pages/AnimeFlixInfoAnime'

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Main
    },
    {
        path: '/infoanime/:categoryAnime/:idanime',
        component: InfoAnime
    }]
})
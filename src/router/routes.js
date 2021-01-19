import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Main from './../pages/AnimeFlixMain'

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Main
    }]
})
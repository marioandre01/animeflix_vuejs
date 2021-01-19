import Vue from 'vue'
import Vuex from 'vuex'
import api from './../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        categoriesAnime: [],

        id: 1,
        category: '',
        imageBackground: '',
        titleAnimeMain: '',
        resumeAnime: '',
        linkTrailerAnime: '',
        modalYear: '',
        modalInfoAnime: '',
        modalSinopse: '',
        modalFuncaoResponsavel: '',
        modalNameResponsavel: '',

    },
    getters: {
        getId(state) {
            return state.id;
        },
        getCategory(state) {
            return state.category;
        },
        getImageBackground(state) {
            return state.imageBackground;
        },
        getTitleAnimeMain(state) {
            return state.titleAnimeMain;
        },
        getResumeAnime(state) {
            return state.resumeAnime;
        },
        getLinkTrailerAnime(state) {
            return state.linkTrailerAnime;
        },
        getModalYear(state) {
            return state.modalYear;
        },
        getModalInfoAnime(state) {
            return state.modalInfoAnime;
        },
        getSinopse(state) {
            return state.modalSinopse;
        },
        getFuncaoResponsavel(state) {
            return state.modalFuncaoResponsavel;
        },
        getNameResponsavel(state) {
            return state.modalNameResponsavel;
        },
        getListAnimes(state) {
            return state.listAnimes;
        },
        getListAnimesFromId: state => id => {
            let anime =state.listAnimes.find(item => {
                return (item.id == id)
            });

            return anime;
        },
        getCategoriesAnime(state) {
            return state.categoriesAnime;
        },
        getAnimeFromId: state => (id, category) => {
    
            let categoryAnime = state.categoriesAnime.find(item => {
                return (item.category == category)
            });
           
            let anime = categoryAnime.animes.find(item => {
                return (item.id == id)
            });

            return anime;          
        }

    },
    mutations: {
        
        setCategoriesAnime(state, newValue) {
            state.categoriesAnime = newValue;
        },
        setAnimeInitial(state) {
        
                let categoryAnime = state.categoriesAnime.find(item => {
                    return (item.category == "Lançamentos")
                });

                let anime = categoryAnime.animes.find(item => {
                    return (item.id == 1)
                });

                state.id = 1;
                state.category = 'Lançamentos';
                state.imageBackground = anime.imageBackground;
                
                state.titleAnimeMain = anime.title;

                state.resumeAnime = anime.resume;
                state.linkTrailerAnime = anime.linkVideo;

                state.modalYear = anime.year;
                state.modalInfoAnime = anime.info;
                state.modalSinopse = anime.sinopse;
                state.modalFuncaoResponsavel = anime.cargo;
                state.modalNameResponsavel = anime.autor;          
        },
        setInfoAnimeMain(state, payload) {
 
            let categoryAnime = state.categoriesAnime.find(item => {
                return (item.category == payload.category)
            });

            let anime = categoryAnime.animes.find(item => {
                return (item.id == payload.id)
            });

            state.id = payload.id;
            state.category = payload.category;
            state.imageBackground = anime.imageBackground;
           
            state.titleAnimeMain = anime.title;

            state.resumeAnime = anime.resume;
            state.linkTrailerAnime = anime.linkVideo;

            state.modalYear = anime.year;
            state.modalInfoAnime = anime.info;
            state.modalSinopse = anime.sinopse;
            state.modalFuncaoResponsavel = anime.cargo;
            state.modalNameResponsavel = anime.autor;
        }
    },
    actions: {
        async consumeApiAnime(context) {

            try {
                const response = await api.get();
                context.commit('setCategoriesAnime', response.data);
                context.commit('setAnimeInitial');

            } catch (err) {
                console.log('Erro:', err);
            }
           
        },
        changeInfoAnimeMain(context, payload) {
            context.commit('setInfoAnimeMain', payload);
        }
    }
})
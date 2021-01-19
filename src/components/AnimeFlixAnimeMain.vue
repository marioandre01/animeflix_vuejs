<template>
    <div v-bind:style="imageBackground(imgBackground)" class="filme-principal" >
          
            <div class="container">
                <h3 @click="goToPage(`/infoanime/${category}/${id}`)" class="titulo">{{ titleAnime }}</h3>
                <p class="descricao">{{ resume }}</p>
                <div class="botoes">

                    <a class="botao" target="_blank" :href="linkTrailerAnime">
                        <font-awesome-icon icon="play" class="icon-button"/>
                        ASSISTIR AGORA
                    </a>

                    <a href="#abrirModal" class="botao">
                        <font-awesome-icon icon="info-circle" class="icon-button"/>
                        MAIS INFORMAÇÔES
                    </a>

                    <div id="abrirModal" class="modal">
                        <div class="modal-info">
                            <a href="#" title="Fechar" class="fechar">x</a>

                            <div class="modal-titulo">
                                <h2>{{ titleAnime}} - {{ modalYear }}</h2>
                                <p>{{ modalInfoAnime }}</p>
                            </div>
                            
                            <div class="modal-sinopse">
                                <h4>Sinopse</h4>
                            <p>{{ modalSinopse }}</p> 
                            </div>

                            <div class="modal-diretor">
                                <h5>{{ modalFuncaoResponsavel }}</h5>
                                <p>{{ modalNameResponsavel }}</p> 
                            </div>
                                  
                        </div> 
                    </div>

                </div>
            </div>  
           
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
    
        }
    },
    computed: {
        ...mapGetters({
            id: 'getId',
            category: 'getCategory',
            imgBackground: 'getImageBackground',
            titleAnime: 'getTitleAnimeMain',
            resume: 'getResumeAnime',
            linkTrailerAnime: 'getLinkTrailerAnime',
            modalYear: 'getModalYear',
            modalInfoAnime: 'getModalInfoAnime',
            modalSinopse: 'getSinopse',
            modalFuncaoResponsavel: 'getFuncaoResponsavel',
            modalNameResponsavel: 'getNameResponsavel',
        })
     
    },
    methods: {
        goToPage(page) {
            this.$router.push(page);
        },
        imageBackground(data) {
            return {
                background: `linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('${data}') no-repeat`,
          
            }
        }
    }

}
</script>

<style scoped>

/*Filme principal*/

.filme-principal {
    font-size: 16px;
 
    height: 400px;
    background-size: cover !important;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

}

.filme-principal .descricao {
    margin-top: 10px;
    margin-bottom: 40px;
}

.filme-principal .titulo {
    margin-top: 15%;
    font-size: 40px;
    font-family: 'Trebuchet MS', Arial, sans-serif;
    background-color:#fff;
    width: fit-content;
    padding: 5px 30px;
    border-radius: 15px;
    color: rgb(56, 56, 55);;
}

.botoes a {
    text-decoration: none;
}

.botao {
    background-color: rgba(0,0,0,.50);
    border: none;
    color: white;

    padding: 15px 30px;
    margin-right: 15px;
    font-size: 12px;

    cursor: pointer;
    transition: .3s ease all;
}

.botao:hover {
    background-color: white;
    color: black;
}

.botao .icon-button {
    margin-right: 8px;
}


.container {
    margin-left: 30px;

}

.container h3:hover { 
    transition: 0.5s ease all;
    color: var(--vermelho);
    cursor: pointer;
  
}

.filme-principal .container {
    width: 70%;
}

.box-filme {
    height: 100%;
    width: 100%;
    display: block ;
}

/* CSS janela popup Mais Informações */
.modal {
    /*posicionar o modal afixadamente no centro da tela*/
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    font-family: Arial, Helvetica, sans-serif;

    /*sentenciar o background, escurecendo o fundo para enfatizar a janela, que irá aparecer centralizada na tela*/
    background: rgba(0,0,0,0.8);

    /*assegura que a janela irá aparecer por cima das outras*/
    z-index: 99999;

    /*seta a opacidade do modal, removendo sua visibilidade por default*/
    opacity:0;

    /*comandos de transição, para que essa mudança de transição tenha um timing apropriado e não ocorra do nada*/
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
  }

  /* :target representa um único elemento (o elemento alvo) com uma id correspondente ao fragmento da URL.*/
  /* ela será formatada conforme os atributos passados no formato da classe - id="abrirModal" class="modal*/
  .modal:target {
    /*mostra o conteudo da class modal e id="abrirModal" */
    opacity: 1;

    /*A propriedade pointer-events permite autores controlarem sob qualquer circustancia(se houver) um elemento gráfico particular podendo ser o alvo do evento do mouse*/ 
    /*configurada como auto significa que o mouse irá tratar todos os eventos não evidenciados como simples partes do site, ou seja, o modal será uma parte do site, assim como todo o restante dele*/
    pointer-events: auto;
  }

  .modal .modal-info {
    width: 500px;
    position: relative;
    margin: 10% auto;
    padding: 18px;
    border-radius: 5px;
    background-color: rgba(121, 121, 121, 0.212);
  }

  .modal .modal-info .modal-titulo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-bottom: 10px;
  }

  .modal .modal-info .modal-sinopse {
    margin-bottom: 10px;
  }

  .modal .modal-info .modal-sinopse p {
    font-size: 14px;
  }

  .modal .modal-info .modal-diretor p {
    font-size: 13px;
  }

  .fechar {
    position: absolute;
    width: 30px;
    right: -15px;
    top: -20px;
    text-align: center;
    line-height: 30px;
    margin-top: 5px;
    background: var(--vermelho);
    border-radius: 50%;
    font-size: 16px;
    color: var(--preta);
  }

</style>
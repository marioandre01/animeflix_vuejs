<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  created() {
    this.$store.dispatch("consumeApiAnime");  
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
  
}

:root {
    --vermelho: #E50914;
    --preta: #141414; 
}

/*Elementos base*/
body {
    background: var(--preta);
    font-family: 'Arial', Times, serif;
    color: white;
}
</style>

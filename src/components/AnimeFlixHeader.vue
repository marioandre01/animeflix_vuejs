<template>
    <header>
        <div class="container">
            <h2 class="logo">ANIMEFLIX</h2>
            
            <nav>
                <router-link to="/" class="btn mr-5">Início</router-link>
                <router-link to="/animes" class="btn mr-5">Animes</router-link>
                <router-link to="/categorias" class="btn mr-5">Categorias</router-link>
                <router-link to="/sobre" class="btn mr-5">Sobre</router-link>
            </nav>
            <input type="text" placeholder="Pesquisar anime">
        </div>
    </header>
</template>

<script>

export default {
   
}
</script>

<style scoped>

header .container {
    background-color: rgb(36, 36, 36);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

header .logo {
    margin-left: 20px;
    color: var(--vermelho);
    font-family: 'Arial Black', Times;
    font-size: 40px;
}

header nav a {
    text-decoration: none;
    color: #AAA;
    margin-right: 20px;
}

header nav a:hover {
    color: #fff;  
}

header input {
    margin-right: 20px;
    border-radius: 5px;
    padding: 5px;
}

.link-active {
    background-color: #fff;
    color: #000 !important;
    padding: 5px;
    border-radius: 5px;
}

/* Responsividade */
@media screen and (max-width:700px) {
    header .container {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
    }
}

</style>
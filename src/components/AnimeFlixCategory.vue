<template>
  <div class="animeCategories">
    <div class="titleAnime">
      <h2>{{ category }}</h2>
    </div>

    <div class="carousel">
      <Carousel :items="5" :margin="5" :loop="true" :nav="false">
        <img
          @click="goToPage(`${category}`, `${anime.id}`)"
          class="box-filme"
          v-for="anime in animes"
          v-bind:key="anime.id"
          v-bind:src="anime.image"
          alt=""
        />
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "vue-owl-carousel";

export default {
  components: {
    Carousel,
  },
  props: ["category", "animes"],
  data() {
    return {};
  },
  methods: {
    goToPage(value1, value2) {
      this.$store.dispatch("changeInfoAnimeMain", {
        category: value1,
        id: value2,
      });
    },
  },
};
</script>

<style scoped>
.carousel {
  margin-top: 5px;
}

.animeCategories .titleAnime {
  background-color: rgb(67, 75, 179);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid rgb(36, 36, 36);
}
.animeCategories h2 {
  background-color: #fff;
  color: rgb(67, 75, 179);
  padding: 2px 10px;
  border-radius: 4px;
}

.box-filme {
  opacity: 0.7;
}
.box-filme:hover {
  opacity: 1;
}
</style>


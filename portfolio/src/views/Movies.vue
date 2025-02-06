<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import MovieCard from "../components/MovieCard.vue";

const movieList = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    movieList.value = response.data;
  } catch (error) {
    console.log("Erro fetching data", error);
  }
});
</script>
<template>
  <h1 class="pt-20 dark:text-white" data-aos="fade-right">Movies</h1>
  <p class="dark:text-white" data-aos="fade-right">Show case Axio</p>
  <section class="relative w-full" data-aos="zoom-in-up">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

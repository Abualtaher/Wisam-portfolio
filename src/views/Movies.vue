<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import MovieCard from "../components/MovieCard.vue";

const movieList = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("/db.json");
    movieList.value = response.data.movies;
    console.log(movieList.value);
  } catch (error) {
    console.error("Error fetching", error);
  }
});
</script>
<template>
  <h1
    class="mt-20 text-4xl font-extrabold dark:text-white"
    data-aos="fade-right"
  >
    Axios
  </h1>
  <p class="dark:text-white m-3" data-aos="fade-right">
    In my latest project, I utilized Axios to fetch data from a JSON server,
    allowing for dynamic and interactive content retrieval. The fetched data is
    subsequently displayed on beautifully designed cards using Tailwind CSS,
    enhancing the overall user experience with a modern and responsive layout.
    Additionally, I employed Vue.js to manage the components efficiently,
    leveraging props to pass data seamlessly between them. This approach not
    only streamlined the data flow but also facilitated a more organized
    structure in my application, demonstrating my commitment to using best
    practices in web development.
  </p>
  <section class="relative w-full" data-aos="zoom-in-up">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <movie-card v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

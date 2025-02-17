<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const queryMovie = ref(null); // Start with null for better condition checking
const route = useRoute();

onMounted(async () => {
  try {
    const response = await axios.get("/db.json");
    console.log(response.data);

    const movieId = parseInt(route.params.id);

    queryMovie.value = response.data.movies.find(
      (movie) => movie.id === movieId
    );

    if (!queryMovie.value) {
      console.error(`Movie with ID ${movieId} not found`);
    }
  } catch (error) {
    console.error("Error fetching", error);
  }
});
</script>

<template>
  <div
    v-if="queryMovie"
    class="mt-18 mb-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img
        class="p-8 rounded-t-lg"
        :src="queryMovie.poster"
        alt="product image"
      />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ queryMovie.title }}
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <!-- Render stars or additional icons here -->
        </div>
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
          >5.0</span
        >
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Mollitia delectus consequuntur eos voluptates natus earum sapiente
        laboriosam iure saepe odit quia ratione beatae pariatur amet porro nam,
        nulla obcaecati. Sapiente! Magnam id facilis, sit optio vitae voluptatem
        dicta iure nobis maiores sapiente porro fugit, incidunt modi vero
      </p>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
          queryMovie.year
        }}</span>

        <a
          href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Add to cart</a
        >
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
    <!-- Fallback for loading state -->
  </div>
</template>

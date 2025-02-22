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
  <div data-aos="flip-up">
    <h1 class="mt-20 text-5xl font-extrabold dark:text-white">
      Dynamic Routes
    </h1>
    <small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">
      Show case
    </small>
  </div>
  <div
    v-if="queryMovie"
    class="mt-20 mb-20 flex justify-center items-center"
    data-aos="zoom-in"
  >
    <a
      href="#"
      target="#"
      rel="noopener noreferrer"
      class="m-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        :src="queryMovie.poster"
        alt="queryMovie.title"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ queryMovie.title }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ queryMovie.year }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          nesciunt eum voluptates commodi praesentium eligendi dignissimos
          blanditiis? Praesentium facilis laudantium qui ducimus sequi
          accusantium odit earum veritatis molestias. Similique, rem! Ex libero
        </p>
      </div>
    </a>
  </div>
</template>

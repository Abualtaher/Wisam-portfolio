<script setup>
import Navbar from "./components/Navbar.vue";
import Movies from "./views/Movies.vue";
import About from "./views/About.vue";
</script>
<template>
  <Navbar />
  <About />
  <Movies />
  <div class="max-w-7xl mx-auto">
    <RouterView />
  </div>
</template>
<style scoped></style>

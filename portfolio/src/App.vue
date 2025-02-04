<script setup>
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <Navbar />
    <About />
    <RouterView />
  </div>
</template>
<style scoped></style>

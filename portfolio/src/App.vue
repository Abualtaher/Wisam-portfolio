<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <RouterView />
    <Navbar />
  </div>
  <Footer />
</template>
<style scoped></style>

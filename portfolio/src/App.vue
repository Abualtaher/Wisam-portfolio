<script setup>
import Navbar from "./components/Navbar.vue";
import BaseEnd from "./components/BaseEnd.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <RouterView />
    <Navbar />
  </div>
  <BaseEnd />
</template>
<style scoped></style>

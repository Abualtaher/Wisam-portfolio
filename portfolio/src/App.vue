<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <RouterView />
    <Navbar />
  </div>
  <Footer />
</template>
<style scoped></style>

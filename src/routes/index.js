import { createRouter, createWebHistory } from "vue-router";

// // Import route components
// const Home = () => import("../views/Home.vue");
// const About = () => import("../views/About.vue");
// const Movies = () => import("../views/Movies.vue");
// const MovieDetails = () => import("../views/MovieDetails.vue");

const Home = () => import("../views/Home.vue");

// Define routes
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: () => import("../views/About.vue") },
  { path: "/movies", component: () => import("../views/Movies.vue") },
  { path: "/movies/:id", component: () => import("../views/MovieDetails.vue") },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

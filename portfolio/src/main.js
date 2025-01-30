// Import Vue and the necessary functions
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";

// Import route components
const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");
const Movies = () => import("./views/Movies.vue");

// Define routes
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/movies", component: Movies },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the Vue application
createApp(App).use(router).mount("#app");

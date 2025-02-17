// Import Vue and the necessary functions
import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./style.css";

// Create and mount the Vue application
createApp(App).use(router).mount("#app");

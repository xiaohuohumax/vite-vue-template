import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "@/router/index";
import { setupPinia } from "@/store/index";

import "@/style/index.css";

(async () => {
  const app = createApp(App);

  setupPinia(app);

  setupRouter(app);

  app.mount("#app");
})();

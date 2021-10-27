import { createApp } from "vue";
import App from "./App.vue";
import mixins from "./mixins";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mixin(mixins)
  .mount("#app");

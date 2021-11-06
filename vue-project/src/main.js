import { createApp } from "vue";
import App from "./App.vue";
import mixins from "./mixins";
import router from "./router";
import store from "./store";
// i18n 플러그인 추가
import i18nPlugin from "./plugins/i18n";

const i18nStrings = {
  en: {
    hi: "Hello!"
  },
  ko: {
    hi: "안녕하세요!"
  }
};

createApp(App)
  .use(store)
  .use(router)
  // i18n 플러그인에 다국어 번역 데이터를 파라미터로 전달
  .use(i18nPlugin, i18nStrings)
  .mixin(mixins)
  .mount("#app");
window.Kakao.init("64b8829af6e1aef65979542f5f196145");

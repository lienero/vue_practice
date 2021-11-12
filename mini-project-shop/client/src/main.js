import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mixins from './mixins';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(store).use(router).use(VueSweetalert2).mixin(mixins).mount('#app');
window.Kakao.init('64b8829af6e1aef65979542f5f196145');

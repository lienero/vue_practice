import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DataBinding from "../views/StoreAccess.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingList from "../views/DataBindingList2.vue";
import Rendering from "../views/RenderingVif.vue";
import Event from "../views/EventChange.vue";
import Computed from "../views/Watch.vue";
import KakaoLogin from "../views/KakaoLogin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: true */ "../views/About.vue")
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: DataBindingHtml
  },
  {
    path: "/databindinglist",
    name: "DataBindingList",
    component: DataBindingList
  },
  {
    path: "/rendering",
    name: "Rendering",
    component: Rendering
  },
  {
    path: "/event",
    name: "Event",
    component: Event
  },
  {
    path: "/computed",
    name: "Computed",
    component: Computed
  },
  {
    path: "/kakaologin",
    name: "KakaoLogin",
    component: KakaoLogin
  },
  {
    path: "/naverlogin",
    name: "NaverLogin",
    component: () =>
      import(/* webpackChunkName: "naverlogin" */ "../views/NaverLogin.vue")
  },
  {
    path: "/googlelogin",
    name: "GoogleLogin",
    component: () =>
      import(/* webpackChunkName: "googlelogin" */ "../views/GoogleLogin.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

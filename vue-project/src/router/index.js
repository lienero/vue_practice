import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DataBinding from "../views/DataBindingStyle2.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

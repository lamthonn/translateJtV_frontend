import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import reportView from "../views/reportView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/report",
    name: "report",
    component: reportView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import reportView from "../views/reportView.vue";
import resultView from "../views/resultView.vue";
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
  {
    path: "/result",
    name: "result",
    component: resultView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

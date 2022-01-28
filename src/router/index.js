import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("views/main/home/Home"),
    meta: {
      sort: 1,
      module: "home",
    },
  },
  {
    path: "/article",
    component: () => import("views/main/article/Article"),
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;

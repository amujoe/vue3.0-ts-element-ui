import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ModulesList from "../views/relation/ModulesList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ModulesList,
  },
  {
    path: "/modules",
    name: "ModulesList",
    component: ModulesList,
  },
  {
    path: "/interface",
    name: "InterfaceList",
    component: () =>
      import(
        /* webpackChunkName: "inter" */ "../views/relation/InterfaceList.vue"
      ),
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

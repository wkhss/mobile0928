import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect:{name:'homeson'},
    component: () =>import("../views/layout/LayOut.vue"),
    children:[
      {
        path: "home",
        name: "homeson",
        component:HomeView,
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/fenxiao",
    name: "fenxiao",
    redirect:{name:'type'},
    component: () =>import("../views/layout/LayOut.vue"),
    children:[
      {
        path: "type",
        name: "type",
        component: () =>import("../views/FenXiao.vue"),
      },
    ]
  },
  {
    path: "/cart",
    name: "mycart",
    redirect:{name:'shop'},
    component: () =>import("../views/layout/LayOut.vue"),
    children:[
      {
        path: "shop",
        name: "shop",
        component: () =>import("../views/MyCart.vue"),
      },
    ]
  },
  {
    path: "/mine",
    name: "mine",
    redirect:{name:'detail'},
    component: () =>import("../views/layout/LayOut.vue"),
    children:[
      {
        path: "detail",
        name: "detail",
        component: () =>import("../views/MineView.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

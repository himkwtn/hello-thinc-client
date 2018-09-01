import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chapter2",
      name: "Chapter 2",
      component: () => import("./views/Chapter2.vue")
    },
    {
      path: "/chapter3-1",
      name: "Chapter 3 Create",
      component: () => import("./views/Chapter3-1.vue")
    },
    {
      path: "/chapter3-2",
      name: "Chapter 3 Read",
      component: () => import("./views/Chapter3-2.vue")
    },
    {
      path: "/chapter3-3",
      name: "Chapter 3 Update",
      component: () => import("./views/Chapter3-3.vue")
    },
    {
      path: "/chapter3-4",
      name: "Chapter 3 Delete",
      component: () => import("./views/Chapter3-4.vue")
    }
  ]
});

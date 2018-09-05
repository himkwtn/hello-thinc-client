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
      path: "/lesson2",
      name: "lesson 2",
      component: () => import("./views/Lesson2.vue")
    },
    {
      path: "/lesson3-1",
      name: "lesson 3 Create",
      component: () => import("./views/Lesson3-1.vue")
    },
    {
      path: "/lesson3-2",
      name: "lesson 3 Read",
      component: () => import("./views/Lesson3-2.vue")
    },
    {
      path: "/lesson3-3",
      name: "lesson 3 Update",
      component: () => import("./views/Lesson3-3.vue")
    },
    {
      path: "/lesson3-4",
      name: "lesson 3 Delete",
      component: () => import("./views/Lesson3-4.vue")
    }
  ]
});

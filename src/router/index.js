import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
import Index from '@/views/home';
import Admin from '@/views/admin';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/admin',
      name: 'Admin Page',
      component: Admin
    },
    {
      path: '/login',
      name: 'Log in',
      component: Login
    }
  ]
});

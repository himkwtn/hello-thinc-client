// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueSocketIO from 'vue-socket.io';
import ApiService from '@/common/api.service';
import ErrorFilter from '@/common/error.filter';
import VueMDCAdapter from 'vue-mdc-adapter';
ApiService.init();
const url =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:3000'
    : window.location.host;
Vue.use(VueMDCAdapter);
Vue.use(VueSocketIO, url);
Vue.filter('error', ErrorFilter);

Vue.config.productionTip = false;
console.log;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

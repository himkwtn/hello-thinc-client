import Vue from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import "@/main.scss";
import "vue-material/dist/vue-material.min.css";
import Axios from "axios";

Vue.use(VueMaterial);
Vue.use(VueAxios, Axios);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

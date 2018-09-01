import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import "@/main.scss";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);
Vue.config.productionTip = false;
console.log;
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

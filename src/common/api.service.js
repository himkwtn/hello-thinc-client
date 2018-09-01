import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const Api = {
  // getProductList: () =>
  //   new Promise(resolve => {
  //     ApiService.get("shop").then(res => resolve(res.data));
  //   }),
  // sellProducts: products => ApiService.post("shop/sell", products),
  // resetProducts: products => ApiService.post("shop/reset", products),
  // promoteProducts: products => ApiService.post("shop/promote", products),
  // login: body => ApiService.post("user/login", body),
  // logout: () => ApiService.get("user/logout")
  hello: () => {
    const result = ApiService.get("/students");
    console.log(result);
    return result;
  }
};

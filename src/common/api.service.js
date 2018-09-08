import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";

const api = "http://localhost:3000/api";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
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
  hello: () => {
    const result = ApiService.get(`${api}/hello-world`);
    return result;
  },
  getRequest: query => Vue.axios.get(`${api}/get${query}`),
  getRequestParams: params => Vue.axios.get(`${api}/params/${params}`),
  postRequest: body => ApiService.post(`${api}/post`, body),
  createStudent: student => ApiService.post(`${api}/students/create`, student),
  findStudent: id => ApiService.get(`${api}/students/read/${id}`),
  updateStudent: (id, subjects) =>
    ApiService.post(`${api}/students/update/${id}`, subjects),
  deleteStudent: id => Vue.axios.get(`${api}/students/delete?id=${id}`)
};

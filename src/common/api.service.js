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
    const result = ApiService.get(`${api}/hello`);
    return result;
  },
  getRequest: query => Vue.axios.get(`${api}/hello/get${query}`),
  postRequest: body => Api.service.post(`${api}/hello/post`, body),
  createdStudent: student => ApiService.post(`${api}/students/create`, student),
  findStudent: id => ApiService.get(`${api}/students/read/${id}`),
  updateStudent: student => ApiService.post(`${api}/students/update`, student),
  deleteStudent: id => Vue.axios.get(`${api}/students/delete?id=${id}`)
};

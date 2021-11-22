import env from "@/environments.js";
import Axios from "axios";

export default {
  list() {
    return Axios.get(`${env.api_gateway}${env.sites.list}`, { meta: { somemeta: true } });
  },

  pagination(page) {
    return Axios.get(`${env.api_gateway}${env.sites.list}?page=` + page, { meta: { somemeta: true } });
  },

  create(arr) {
    console.log(`${env.api_gateway}${env.sites.create}`);
    return Axios.post(`${env.api_gateway}${env.sites.create}`, arr);
  }
};
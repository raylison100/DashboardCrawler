import env from "@/environments.js";
import Axios from "axios";

export default {
  startJob() {
    return Axios.get(`${env.api_gateway}${env.crawler.start}`, { meta: { somemeta: true } });
  },

  startProcess() {
    return Axios.get(`${env.api_gateway}${env.crawler.process}`, { meta: { somemeta: true } });
  },

};
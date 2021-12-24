import env from "@/environments.js";
import Axios from "axios";

export default {
  sitesInformation() {
    return Axios.get(`${env.api_gateway}${env.inputs.sites_information}`, { meta: { somemeta: true } });
  },

  personalInformation() {
    return Axios.get(`${env.api_gateway}${env.inputs.personal_information}`, { meta: { somemeta: true } });
  },

  sensitiveInformation() {
    return Axios.get(`${env.api_gateway}${env.inputs.sensitive_information}`, { meta: { somemeta: true } });
  },
};
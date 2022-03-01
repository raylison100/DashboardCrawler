export default {

  api_gateway: 'http://gateway_server',

  sites: {
    list: '/sites/sites',
    create: '/sites/sites',
  },

  inputs: {
    sites_information: '/sites/inputs/sites-information/',
    personal_information: '/sites/inputs/personal-information/',
    sensitive_information: '/sites/inputs/sensitive-information/'
  },

  crawler: {
    start: '/crawler/job/start',
    process: '/crawler/job/process',
  },
}

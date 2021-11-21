import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../layout/starter/Layout.vue';
import Dashboard from '../pages/Dashboard/Dashboard.vue';
import SitesCreate from '../pages/Site/SiteCreate.vue';
import Site from '../pages/Site/SiteList.vue';
import NotFound from "../pages/NotFoundPage/NotFoundPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'sites',
          name: 'sites',
          component: Site
        },
        {
          path: 'sites/create',
          name: 'create',
          component: SitesCreate
        }
      ]
    },
    { path: "*", component: NotFound },
  ]
});

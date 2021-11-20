import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../layout/starter/Layout.vue';
import Dashboard from '../pages/Dashboard/Dashboard.vue';

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
        }
      ]
    }
  ]
});

import { createRouter, createWebHistory } from 'vue-router';

import Welcome from './pages/Welcome.vue';
import Repair from './pages/Repair.vue';
import Service from './pages/Service.vue';
import WebSites from './pages/WebSites.vue';
import Shop from './pages/Shop.vue';
import Admin from './pages/Admin.vue';

import UserAuth from './pages/UserAuth.vue';
import Contacts from './pages/Contacts.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome,
    },
    {
      path: '/repair',
      name: 'repair',
      component: Repair,
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/web',
      name: 'web',
      component: WebSites,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/auth',
      name: 'auth',
      component: UserAuth,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;

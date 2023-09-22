import { createRouter, createWebHistory } from 'vue-router';

import Welcome from './pages/Welcome.vue';
import Computers from './pages/Computers.vue';
import Phones from './pages/Phones.vue';
import Service from './pages/Service.vue';
import WebSites from './pages/WebSites.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome,
    },
    {
      path: '/computers',
      name: 'computers',
      component: Computers,
    },
    {
      path: '/phones',
      name: 'phones',
      component: Phones,
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/webSites',
      name: 'webSites',
      component: WebSites,
    },
  ],
});

export default router;

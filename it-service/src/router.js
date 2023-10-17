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

import AdminWelcome from './components/admin/AdminWelcome.vue';
import NewOrder from './components/admin/NewOrder.vue';
import NewShopItem from './components/admin/NewShopItem.vue';
import NewWebItem from './components/admin/NewWebItem.vue';
import Orders from './components/admin/Orders.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Welcome,
    },
    {
      path: '/repair',
      component: Repair,
    },
    {
      path: '/service',
      component: Service,
    },
    {
      path: '/web',
      component: WebSites,
    },
    {
      path: '/shop',
      component: Shop,
    },
    {
      path: '/auth',
      component: UserAuth,
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        { path: '', redirect: '/admin/welcome' },
        { path: 'orders', component: Orders },
        { path: 'newOrder', component: NewOrder },
        { path: 'newShopItem', component: NewShopItem },
        { path: 'newWebItem', component: NewWebItem },
        { path: 'welcome', component: AdminWelcome},
      ],
    },
    {
      path: '/contacts',
      component: Contacts,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;

import { createStore } from 'vuex';

import ordersState from './modules/orders/index';
import shopState from './modules/shop/index';
import webState from './modules/web/index';
import repairState from './modules/repair/index';
import companyState from './modules/companies/index';
import authState from './modules/auth/index';

const store = createStore({
  modules: {
    orders: ordersState,
    shop: shopState,
    web: webState,
    repair: repairState,
    company: companyState,
    auth: authState,
  },
});

export default store;

import { createStore } from 'vuex';

import ordersState from './modules/orders/index';
import shopState from './modules/shop/index';
import webState from './modules/web/index';
import repairState from './modules/repair/index';

const store = createStore({
  modules: {
    orders: ordersState,
    shop: shopState,
    web: webState,
    repair: repairState,
    
  },
});

export default store;

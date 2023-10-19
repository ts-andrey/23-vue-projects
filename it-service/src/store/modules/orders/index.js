import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import ordersData from '../../../data/admin/ordersData';

export default {
  namespaced: true,
  state() {
    return {
      ordersData: ordersData,
    };
  },
  mutations,
  actions,
  getters,
};

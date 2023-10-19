import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import companyListData from '../../../data/companyListData';

export default {
  namespaced: true,
  state() {
    return {
      companyData: companyListData,
    };
  },
  mutations,
  actions,
  getters,
};

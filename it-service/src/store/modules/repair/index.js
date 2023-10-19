import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import tempRepairStatisticData from '../../../data/tempRepairStatisticData';

export default {
  namespaced: true,
  state() {
    return {
      repairStatistics: tempRepairStatisticData,
    };
  },
  mutations,
  actions,
  getters,
};

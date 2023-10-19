import actionsWeb from './actions';
import gettersWeb from './getters';
import mutationsWeb from './mutations';

import webDevData from '../../../data/webDevData';

export default {
  namespaced: true,
  state() {
    return {
      webData: webDevData,
    };
  },
  actions: actionsWeb,
  getters: gettersWeb,
  mutations: mutationsWeb,
};

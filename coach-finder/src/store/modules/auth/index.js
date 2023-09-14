import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  state() {
    return {
      userId: 'u0',
    };
  },
  actions,
  getters,
  mutations,
};

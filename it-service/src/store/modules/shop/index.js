import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import laptopsData from '../../../data/store/laptopsData';
import notebookData from '../../../data/store/notebookData';
import pcComponentsData from '../../../data/store/pcComponentsData';
import phonesData from '../../../data/store/phoneData';

export default {
  namespaced: true,
  state() {
    return {
      laptops: laptopsData,
      notebooks: notebookData,
      pcComponents: pcComponentsData,
      phones: phonesData,
    };
  },
  mutations,
  actions,
  getters,
};

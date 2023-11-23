export default {
  addCompanyItem(context, payload) {
    context.commit('addCompanyItem', payload);
  },
  removeCompanyItem(context, payload) {
    context.commit('removeCompanyItem', payload);
  },
  updateCompanyItem(context, payload) {
    context.commit('updateCompanyItem', payload);
  },
};

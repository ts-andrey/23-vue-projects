export default {
  setStatus(context, payload) {
    context.commit('setStatus', payload);
  },
  addOrder(context, payload) {
    context.commit('addOrder', payload);
  },
};

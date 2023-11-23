export default {
  setStatus(context, payload) {
    context.commit('setStatus', payload);
  },
  addOrder(context, payload) {
    context.commit('addOrder', payload);
  },
  removeOrderItem(context, payload) {
    context.commit('removeOrderItem', payload);
  },
  updateOrderItem(context, payload) {
    context.commit('updateOrderItem', payload);
  },
};

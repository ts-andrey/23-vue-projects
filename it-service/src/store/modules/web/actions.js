export default {
  addWebItem(context, payload) {
    context.commit('addWebItem', payload);
  },
  removeWebItem(context, payload) {
    context.commit('removeWebItem', payload);
  },
  updateWebItem(context, payload) {
    context.commit('updateWebItem', payload);
  },
}
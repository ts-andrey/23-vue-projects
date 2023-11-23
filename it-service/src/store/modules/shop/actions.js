export default {
  addShopItem(context, payload) {
    context.commit('addShopItem', payload);
  },
  removeShopItem(context, payload) {
    context.commit('removeShopItem', payload);
  },
  updateShopItem(context, payload) {
    context.commit('updateShopItem', payload);
  },
};

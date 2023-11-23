export default {
  setStatus(state, payload) {
    const index = state.ordersData.map(el => el.id).indexOf(payload.id);
    state.ordersData[index].status = payload.newStatus;
  },
  addOrder(state, payload) {
    state.ordersData.unshift(payload);
  },
  removeOrderItem(state, payload) {
    console.log(state.ordersData);
    state.ordersData = state.ordersData.filter(el => el.id !== payload.id);
    console.log(state.ordersData);
  },
  updateOrderItem(state, payload) {
    const index = state.ordersData.findIndex(el => el.id === payload.id);
    state.ordersData[index] = payload;
  },
};

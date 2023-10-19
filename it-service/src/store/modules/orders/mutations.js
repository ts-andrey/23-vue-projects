export default {
  setStatus(state, payload) {
    const index = state.ordersData.map(el => el.id).indexOf(payload.id);
    state.ordersData[index].status = payload.newStatus;
  },
  addOrder(state, payload) {
    state.ordersData.unshift(payload);
  },
};

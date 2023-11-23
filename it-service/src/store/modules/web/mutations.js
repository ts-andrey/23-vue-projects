export default {
  addWebItem(state, payload) {
    state.webData.unshift(payload);
  },
  removeWebItem(state, payload) {
    state.webData = state.webData.filter(el => el.id !== payload.id);
  },
  updateWebItem(state, payload) {
    const index = state.webData.findIndex(el => el.id === payload.id);
    state.webData[index] = payload;
  },
};

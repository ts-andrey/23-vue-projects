export default {
  addWebItem(state, payload) {
    state.webData.unshift(payload);
  },
};

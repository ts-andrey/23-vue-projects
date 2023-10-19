export default {
  addCompanyItem(state, payload) {
    state.companyData.unshift(payload);
  },
};

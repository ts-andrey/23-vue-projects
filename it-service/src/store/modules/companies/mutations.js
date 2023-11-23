export default {
  addCompanyItem(state, payload) {
    state.companyData.unshift(payload);
  },
  removeCompanyItem(state, payload) {
    state.companyData = state.companyData.filter(el => el.id !== payload.id);
  },
  updateCompanyItem(state, payload) {
    const index = state.companyData.findIndex(el => el.id === payload.id);
    state.companyData[index] = payload;
  },
};

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      userName: '',
    };
  },
  mutations: {
    login(state, payload) {
      state.isLoggedIn = true;
      state.userName = payload.user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = '';
    },
  },
  actions: {
    login(context, payload) {
      context.commit('login', payload);
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    getUserStatus(state) {
      return state.isLoggedIn;
    },
    getUserName(state) {
      return state.userName;
    },
  },
};

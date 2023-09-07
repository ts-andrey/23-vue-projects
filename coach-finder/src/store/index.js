import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: new Date().toISOString(),
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;

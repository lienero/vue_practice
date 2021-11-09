import { createStore } from 'vuex';

import persistedstate from 'vuex-persistedstate';

/* eslint-disable no-unused-vars */
const store = createStore({
  state() {
    return {
      user: {},
    };
  },
  mutations: {
    user(state, data) {
      state.user = data;
    },
  },
  plugins: [
    persistedstate({
      paths: ['user'],
    }),
  ],
});

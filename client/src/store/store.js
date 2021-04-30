import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],

  state: {
    token: null,
    user: null,
    isUserLogged: false,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      token ? (state.isUserLogged = true) : (state.isUserLogged = false);
    },

    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setToken: ({ commit }, token) => {
      commit("setToken", token);
    },

    setUser: ({ commit }, user) => {
      commit("setUser", user);
    },
  },
});

export default store;

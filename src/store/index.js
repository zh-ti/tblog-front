import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    inBrowse: true,
    topPoint: 0,
  },
  actions: {
    inBrowse(context, payload) {
      context.commit("inBrowse", payload);
    },
    topPoint(context, payload) {
      context.commit("topPoint", payload);
    },
  },
  mutations: {
    inBrowse(state, value) {
      state.inBrowse = value;
    },
    topPoint(state, value) {
      state.topPoint = value;
    },
  },
});

export default store;

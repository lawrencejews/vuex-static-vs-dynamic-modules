import persistDataPlugin from "../../plugins/persist-data";
/* eslint-disable prettier/prettier */
export default {
  Plugins: [ persistDataPlugin ],
  namespaced: true,
  state() {
    return {
      timesServiced: 0
    };
  },
  actions: {
    serviceMachine({ commit }) {
      commit("completeServiceRequest");
    }
    },
    getters: {},
    mutations: {
        completeServiceRequest(state) {
            state.timesServiced++;
      }
  }
};

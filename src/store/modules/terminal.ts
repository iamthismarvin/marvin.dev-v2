import { Commit } from 'vuex';

interface TerminalState {
  isTerminalActive: boolean;
}

export default {
  namespaced: true,
  state: { isTerminalActive: false },
  getters: {
    isTerminalActive: (state: TerminalState): boolean => state.isTerminalActive,
  },
  mutations: {
    MODIFY_TERMINAL_STATE(state: TerminalState, payload: boolean): void {
      state.isTerminalActive = payload;
    },
  },
  actions: {
    SET_TERMINAL_STATE({ commit }: { commit: Commit }, payload: boolean): void {
      commit('MODIFY_TERMINAL_STATE', payload);
    },
  },
};

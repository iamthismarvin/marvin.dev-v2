import { Commit } from 'vuex';

interface MenuState {
  isMenuActive: boolean;
}

export default {
  namespaced: true,
  state: { isMenuActive: false },
  getters: {
    isMenuActive: (state: MenuState): boolean => state.isMenuActive,
  },
  mutations: {
    MODIFY_MENU_STATE(state: MenuState, payload: boolean): void {
      state.isMenuActive = payload;
    },
  },
  actions: {
    SET_MENU_STATE({ commit }: { commit: Commit }, payload: boolean): void {
      commit('MODIFY_MENU_STATE', payload);
    },
  },
};

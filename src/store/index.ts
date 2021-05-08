import Vue from 'vue';
import Vuex from 'vuex';
import menu from '@/store/modules/menu';
import terminal from '@/store/modules/terminal';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    terminal,
  },
});

import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(VueMeta, { refreshOnceOnNavigation: true });
Vue.use(VueScrollTo);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

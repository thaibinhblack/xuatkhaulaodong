import Vue from 'vue';
import App from '@/App';
import '@/assets/scss/main.scss';
import router from '@/router';
import i18n from '@/i18n';
import DirectivePlugin from '@/plugins/directives';
import VueWow from 'vue-wow';

Vue.config.productionTip = false;
Vue.use(DirectivePlugin);
Vue.use(VueWow);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

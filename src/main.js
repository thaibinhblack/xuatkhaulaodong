import Vue from 'vue';
import App from '@/App';
import '@/assets/scss/main.scss';
import router from '@/router';
import i18n from '@/i18n';
import DirectivePlugin from '@/plugins/directives';

Vue.config.productionTip = false;
Vue.use(DirectivePlugin);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

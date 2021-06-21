import Vue from 'vue';
import VueI18n from 'vue-i18n';
import vi from '@/i18n/locales/vi.json';

Vue.use(VueI18n);

const messages = {
  vi,
};

const i18n = new VueI18n({
  locale: 'vi',
  messages,
});

export default i18n;

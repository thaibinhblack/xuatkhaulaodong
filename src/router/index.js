import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* Webpackchunk Home */ '@/views/Home'),
    meta: {
      title: 'Hom'
    }
  }
];
const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: '--active',
  linkExactActiveClass: '--active-exact',
});

export default router;

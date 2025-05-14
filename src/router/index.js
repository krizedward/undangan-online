import Vue from 'vue';
import Router from 'vue-router';
import EdwardRuth from '@/components/views/EdwardRuth.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/edwardruth' // 👈 redirect default ke edwardruth
    },
    {
      path: '/edwardruth',
      name: 'EdwardRuth',
      component: EdwardRuth
    }
  ]
});

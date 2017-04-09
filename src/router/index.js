import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Collection from '@/components/Collection';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/:collectionId',
      name: 'Collection',
      component: Collection,
    },
  ],
});

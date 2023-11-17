import { createRouter, createWebHistory } from 'vue-router';

import postRoutes from './posts';
import commonRoutes from './common';
import otherRoutes from './other';
import { useAuthStore } from '@/stores/auth';

const routes = [...postRoutes, ...commonRoutes, ...otherRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log('to: ', to);
  console.log('from: ', from);
  const authStore = useAuthStore();
  // to.meta.requiresCamera
  // to.meta.requiresAuth
  if (to.meta.requiresAuth && authStore.isAuthenticated === false) {
    alert('로그인 해주세요~!');
    return '/login';
  }
  // if (to.name === 'MyPage') {
  //   // return false;
  //   // router.push('/')
  //   // router.push({name: 'Home'})
  //   // return '/';
  //   // next('/');
  //   return '/';
  // }
  // return false;
});

export default router;

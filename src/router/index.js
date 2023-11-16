import { createRouter, createWebHistory } from 'vue-router';

import postRoutes from './posts';
import commonRoutes from './common';
import otherRoutes from './other';

const routes = [...postRoutes, ...commonRoutes, ...otherRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

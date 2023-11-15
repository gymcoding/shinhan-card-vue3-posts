import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
/**
 * 라우트 정보
 * / -> HomeView.vue
 * /about -> AboutView.vue
 */
const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/posts',
    component: PostListView,
  },
  {
    path: '/posts/create',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    component: PostDetailView,
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;

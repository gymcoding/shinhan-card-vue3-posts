import HomeView from '@/views/HomeView.vue';
// import AboutView from '@/views/AboutView.vue';
// import PostListView from '@/views/posts/PostListView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

export default [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    // component: () => AboutView,
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/posts',
    name: 'PostList',
    component: () => import('@/views/posts/PostListView.vue'),
  },

  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        // /nested
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        // /nested/one
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        // /nested/two
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];

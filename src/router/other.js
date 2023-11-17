import HomeView from '@/views/HomeView.vue';
// import AboutView from '@/views/AboutView.vue';
// import PostListView from '@/views/posts/PostListView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

function removeQueryString(to, from) {
  // to.path = mypage
  if (Object.keys(to.query).length > 0) {
    return { path: to.path, query: {} };
  }
}
export default [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      requiresCamera: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    // component: () => AboutView,
    component: () => import('@/views/AboutView.vue'),
    beforeEnter: [removeQueryString],
  },
  {
    path: '/posts',
    name: 'PostList',
    component: () => import('@/views/posts/PostListView.vue'),
    beforeEnter: () => {
      console.log('라우트 가드');
    },
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('@/views/MyPage.vue'),
    beforeEnter: [removeQueryString],
    // meta: {
    //   requiresAuth: true,
    // },
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

<template>
  <div>
    <h2>게시글 목록</h2>

    <hr class="my-4" />

    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    />

    <hr class="my-4" />
    <p v-if="loading">...Loading</p>
    <p v-else-if="error">error: {{ error }}</p>
    <template v-else>
      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col-4">
          <RouterLink :to="`/posts/${post.id}`">
            <PostItem
              :title="post.title"
              :content="post.content"
              :createdAt="post.createdAt"
            />
          </RouterLink>
        </div>
      </div>

      <AppPagination
        :current-page="params._page"
        :page-count="pageCount"
        @page="page => (params._page = page)"
      />
    </template>
    <hr class="my-4" />
    <!-- <AppCard>
      <PostDetailView :id="1" />
    </AppCard> -->
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
// import PostItem from '@/components/posts/PostItem.vue';
// import PostFilter from '@/components/posts/PostFilter.vue';

import { useAxios } from '@/composables/axios';

console.log('PostListView');

// const posts = ref([]);
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: 3,
  _page: 1,
  title_like: '',
});

const {
  loading,
  error,
  data: posts,
  response,
} = useAxios('/posts', { params });

const totalCount = computed(() => {
  return response.value?.headers['x-total-count'] || 0;
});
const pageCount = computed(() => {
  return Math.ceil(totalCount.value / params.value._limit);
});
watch(pageCount, () => {
  console.log('pageCount: ', pageCount.value);
});

// const loading = ref(false);
// const error = ref(null);

// const fetchPosts = async () => {
//   try {
//     loading.value = true;
//     error.value = null;
//     const { data, headers } = await getPosts(params.value);
//     posts.value = data;
//     totalCount.value = headers['x-total-count'];
//   } catch (err) {
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// };
// watchEffect(fetchPosts);
// fetchPosts();
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

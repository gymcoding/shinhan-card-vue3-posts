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
          <RouterLink :to="`/posts/${post.id}`" @click.prevent>
            <PostItem
              :title="post.title"
              :content="post.content"
              :createdAt="post.createdAt"
              @preview.stop="previewId = post.id"
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
    <select v-model="previewId" class="form-control" name="" id="">
      <option v-for="post in posts" :value="post.id" :key="post.id">
        {{ post.title }}
      </option>
    </select>
    <AppCard>
      <PostDetailView :id="previewId" />
    </AppCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAxios } from '@/composables/axios';
import PostDetailView from './PostDetailView.vue';

const previewId = ref(1);

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

const totalCount = computed(
  () => response.value?.headers['x-total-count'] || 0,
);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

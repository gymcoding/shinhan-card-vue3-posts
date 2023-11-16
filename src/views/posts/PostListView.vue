<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <form>
      <div class="row g-3">
        <div class="col">
          <!-- debounce throttle -->
          <input
            v-model.lazy="params.title_like"
            type="text"
            class="form-control"
            placeholder="검색어를 입력해주세요!"
          />
        </div>
        <div class="col-3">
          <select v-model="params._limit" class="form-select">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>
    <hr class="my-4" />
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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !(params._page > 1) }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click="params._page--"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pageCount"
          :key="page"
          class="page-item"
          :class="{ active: page === params._page }"
        >
          <a class="page-link" href="#" @click="params._page = page">
            {{ page }}
          </a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !(params._page < pageCount) }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click="params._page++"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="1" />
    </AppCard>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from 'vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from './PostDetailView.vue';
import { getPosts } from '@/api/posts';
import AppCard from '@/components/AppCard.vue';

const posts = ref([]);
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: 3,
  _page: 1,
  title_like: '',
});
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);
watch(pageCount, () => {
  console.log('pageCount: ', pageCount.value);
});
const fetchPosts = async () => {
  const { data, headers } = await getPosts(params.value);
  posts.value = data;
  totalCount.value = headers['x-total-count'];
};
watchEffect(fetchPosts);
// fetchPosts();
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

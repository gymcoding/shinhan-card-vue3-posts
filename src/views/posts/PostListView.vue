<template>
  <div>
    <h2>게시글 목록</h2>
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
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="1" />
    </AppCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from './PostDetailView.vue';
import { getPosts } from '@/api/posts';
import AppCard from '@/components/AppCard.vue';

const posts = ref([]);

const fetchPosts = async () => {
  const { data } = await getPosts();
  posts.value = data;
};
fetchPosts();
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

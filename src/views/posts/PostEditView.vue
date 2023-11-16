<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="post.title"
      v-model:content="post.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary" type="submit">수정</button>
      </template>
    </PostForm>
    <AppAlert :items="alerts" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const post = ref({});
const fetchPost = async () => {
  const { data } = await getPostById(id);
  post.value = { ...data }; // deep copy vs shallow copy
};
fetchPost();

const edit = async () => {
  try {
    await updatePost(id, { ...post.value });
    vAlert('수정이 완료되었습니다!!!');
    // router.push({ name: 'PostDetail', params: { id } });
  } catch (error) {
    console.error(error);
    vAlert(error.message, 'error');
  }
};
const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });

const alerts = ref([]);
const vAlert = (message, type = 'success') => {
  alerts.value.push({ type, message });
  setTimeout(() => alerts.value.shift(), 3000);
};
</script>

<style lang="scss" scoped></style>

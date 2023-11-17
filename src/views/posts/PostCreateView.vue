<template>
  <div>
    <h2 @click="visible = !visible" v-color="'red'">게시글 등록</h2>
    <hr class="my-4" />
    <p v-if="loading">...Loading</p>
    <p v-if="error">error: {{ error }}</p>
    <PostForm
      v-if="visible"
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>
        <button type="submit" class="btn btn-primary">저장</button>
      </template>
    </PostForm>
    <AppAlert :items="alerts" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/composables/axios';

const router = useRouter();
const goListPage = () => router.push({ name: 'PostList' });
const visible = ref(true);
const form = ref({
  title: null,
  content: null,
});

const { loading, error, execute } = useAxios(
  '/posts',
  { method: 'post' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('등록이 완료되었습니다!');
      router.push({ name: 'PostList' });
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);
const save = () => {
  execute({
    ...form.value,
    createdAt: Date.now(),
  });
};

const { alerts, vAlert, vSuccess } = useAlert();
</script>

<style lang="scss" scoped></style>

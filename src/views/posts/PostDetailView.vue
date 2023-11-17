<template>
  <div>
    <h3>id: {{ id }}</h3>
    <h3>isEven: {{ isEven }}</h3>
    <h2>{{ post?.title }}</h2>
    <p>{{ post?.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post?.createdAt).format('YYYY-MM-DD HH:mm:ss') }}
    </p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { deletePost } from '@/api/posts';
import { useAxios } from '@/composables/axios';
import { watch } from 'vue';
import { watchEffect } from 'vue';
import { computed } from 'vue';
import { useNumber } from '@/composables/number';
import { toRef } from 'vue';
import { toRefs } from 'vue';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
});
// const id = props.id; // id = number Reactive API [x]
// const id = toRef(props, 'id'); // id = Reactive API [0]
const { idRef } = toRefs(props); // id = Reactive API [0]
const { isEven } = useNumber(idRef);

const router = useRouter();
const url = computed(() => `/posts/${props.id}`);
const { data: post } = useAxios(url); // url === ref

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }
    await deletePost(props.id);
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
    // str -> console.log
    // error -> console.error
    // obj -> console.dir
  }
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>

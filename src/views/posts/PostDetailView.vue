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
        <button class="btn btn-outline-dark" @click="$router.push('/posts/1')">
          이전글
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="$router.push('/posts/2')">
          다음글
        </button>
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
import { useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import { deletePost, getPostById } from '@/api/posts';
import { useAxios } from '@/composables/axios';
import { watch } from 'vue';
import { watchEffect } from 'vue';
import { computed } from 'vue';
import { useNumber } from '@/composables/number';
import { toRef } from 'vue';
import { toRefs } from 'vue';
import { ref } from 'vue';

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
// const post = ref({});
// const fetchPost = async () => {
//   const { data } = await getPostById(props.id);
//   post.value = data;
// };
// fetchPost();
// watch(route)
// watchEffect

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

onBeforeRouteUpdate(() => {
  console.log('onBeforeRouteUpdate');
  // fetchPost();
});
onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave');
});
</script>
<script>
export default {
  beforeRouteEnter() {
    console.log('beforeRouteEnter');
  },
};
</script>

<style lang="scss" scoped></style>

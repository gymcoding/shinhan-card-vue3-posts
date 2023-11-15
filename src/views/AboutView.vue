<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="moveHomeView">
      Home 으로 이동
    </button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

console.log('route.path: ', route.path);
const moveHomeView = () => router.push('/');
</script>

<style lang="scss" scoped></style>

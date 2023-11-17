<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="moveHomeView">
      Home 으로 이동
    </button>
    <p>{{ x }}, {{ y }}</p>
    <input v-model="z" />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useMouse } from '@/hooks/useMouse';

const route = useRoute();
const router = useRouter();

console.log('route.path: ', route.path);
const moveHomeView = () => router.push('/');

const { x, y, z } = useMouse();
</script>

<style lang="scss" scoped></style>

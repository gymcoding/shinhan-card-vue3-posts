<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $person }}</p>
    <button class="btn btn-primary" @click="$router.push('/about')">
      About 으로 이동
    </button>
    <p>{{ x }}, {{ y }}</p>
    <input v-model="z" />
  </div>
</template>

<script>
export default {
  created() {
    console.log('created: ', this.$person);
  },
};
</script>
<script setup>
import { inject } from 'vue';
import { useMouse } from '@/hooks/useMouse';

const person = inject('person');

console.log('person: ', person);

const { x, y, z } = useMouse();
</script>

<style lang="scss" scoped></style>

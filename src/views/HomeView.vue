<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $person }}</p>
    <button class="btn btn-primary" @click="$router.push('/about')">
      About 으로 이동
    </button>
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

const person = inject('person');

console.log('person: ', person);
</script>

<style lang="scss" scoped></style>

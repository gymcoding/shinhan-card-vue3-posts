<template>
  <main>
    <div class="container py-4">
      <RouterView />
      counterStore.counter: {{ counterStore.counter }}
    </div>
  </main>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<style lang="scss" scoped></style>

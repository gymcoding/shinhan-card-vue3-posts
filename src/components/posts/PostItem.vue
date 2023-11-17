<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ content }}</p>
      <p class="text-muted">{{ createdDate }}</p>
    </div>
    <button class="btn btn-primary btn-sm m-3" @click.stop="$emit('preview')">
      preview
    </button>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});
defineEmits(['preview']);

const dayjs = inject('dayjs');
const createdDate = computed(() =>
  dayjs(props.createdAt).format('YYYY-MM-DD HH:mm:ss'),
);
</script>

<style lang="scss" scoped></style>

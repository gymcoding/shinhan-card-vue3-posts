<template>
  <div v-if="show" class="app-alert alert" :class="typeClass" role="alert">
    {{ message }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'error',
    validator: value => ['success', 'error'].includes(value),
  },
});

const typeClass = computed(() =>
  props.type === 'error' ? 'alert-danger' : 'alert-primary',
);
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>

<template>
  <div class="app-alert">
    <TransitionGroup name="slide">
      <div
        v-for="({ type, message }, index) in alerts"
        :key="index"
        class="alert"
        :class="typeClass(type)"
        role="alert"
      >
        {{ message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
// import { useAlertStore } from '@/composables/alert';
// import { useAlertStore } from '@/composables/alert';
import { useAlertStore } from '@/stores/alert';
// import 실수, storeToRefs 안함, logout
const { alerts } = storeToRefs(useAlertStore());

const typeClass = type => (type === 'error' ? 'alert-danger' : 'alert-primary');
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>

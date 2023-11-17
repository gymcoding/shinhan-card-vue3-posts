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
    <h2>Counter Stores</h2>
    <p>counter: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button @click="increment()">click</button>
    <button class="btn btn-primary" @click="authStore.login()">로그인</button>
    <button class="btn btn-primary" @click="authStore.logout()">
      로그아웃
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
import { storeToRefs } from 'pinia';
import { useMouse } from '@/hooks/useMouse';
import { useCounterStore } from '@/stores/counter';
import { useAuthStore } from '@/stores/auth';

const person = inject('person');

console.log('person: ', person);

const { x, y, z } = useMouse();

const counterStore = useCounterStore();
const authStore = useAuthStore();

const { counter, doubleCount } = storeToRefs(counterStore);
const { increment } = counterStore;
</script>

<style lang="scss" scoped></style>

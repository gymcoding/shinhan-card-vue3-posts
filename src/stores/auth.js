import { defineStore } from 'pinia';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import { computed } from 'vue';

// import { useLocalStorage, StorageSerializers } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const user = useLocalStorage('auth/user', null, {
    serializer: StorageSerializers.object,
  });
  const login = () => {
    user.value = { username: '홍길동' };
  };
  const logout = () => (user.value = null);
  const isAuthenticated = computed(() => !!user.value);

  return { user, login, logout, isAuthenticated };
});

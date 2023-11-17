import { defineStore } from 'pinia';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

// import { useLocalStorage, StorageSerializers } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const user = useLocalStorage('auth/user', null, {
    serializer: StorageSerializers.object,
  });
  const login = () => {
    user.value = { username: '홍길동' };
  };
  const logout = () => (user.value = null);

  return { user, login, logout };
});

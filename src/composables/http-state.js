import { ref } from 'vue';

export const useHttpState = () => {
  const loading = ref(false);
  const error = ref(null);

  return {
    loading,
    error,
  };
};

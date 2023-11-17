import { computed, unref } from 'vue';

export const useNumber = number => {
  // 반응형 상태가 아니다!!!!!
  const isEven = computed(() => unref(number) % 2 === 0);
  const isOdd = computed(() => !isEven.value);
  return {
    isEven,
    isOdd,
  };
};

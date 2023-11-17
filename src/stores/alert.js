import { defineStore } from 'pinia';

import { ref } from 'vue';

export const useAlertStore = defineStore('alert', () => {
  const alerts = ref([]);
  const vAlert = (message, type = 'error') => {
    alerts.value.push({ type, message });
    setTimeout(() => alerts.value.shift(), 3000);
  };
  const vSuccess = message => vAlert(message, 'success');
  return {
    alerts,
    vAlert,
    vSuccess,
  };
});

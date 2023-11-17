import { ref } from 'vue';
// import dayjs from 'dayjs';
// import {useRoute} from 'vue-router';
// const route = useRoute(); // ref, reactive
// route.params //
// route.query
// dayjs(new Date()).format('YYYY_MM_DD') input -> output function

const alerts = ref([]);

export const useAlert = () => {
  // const alerts = ref([]);
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
};

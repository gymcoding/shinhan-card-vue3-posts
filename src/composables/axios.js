import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

/**
 * Composables Point!
 * 1] 상태 저장 비즈니스 로직을 캡슐화한 것이다!
 * 2] Vue 컴포지션 API를 활용
 * 3] 파라미터로 반응형 변수가 올 수도 있고, 안올 수도 있다.
 */

// 1] loading 시키고
// 2] 서버 콜하고
// 3] 성공이면 원하는 거 진행~!
// 4] 실패하면 error 상태 저장하고
// 5] 마지막으로 loading false 하고

const defaultOptions = {
  immediate: true,
};

export const useAxios = (url, config = {}, options = {}) => {
  // string === typeof url
  const loading = ref(false);
  const error = ref(null);
  const data = ref(null);
  const response = ref(null);

  const { params } = config; // ref -> watchEffect -> api call
  const { immediate, onSuccess, onError } = {
    ...defaultOptions,
    ...options,
  };

  const execute = body => {
    loading.value = true;
    error.value = null;

    axios(unref(url), {
      ...config,
      params: unref(params),
      data: typeof body === 'object' ? body : {},
    })
      .then(res => {
        response.value = res;
        data.value = res.data;
        if (onSuccess) {
          onSuccess(res);
        }
      })
      .catch(err => {
        error.value = err;
        if (onError) {
          onError(err);
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };

  // params가 반응형 상태라면 watchEffect를 수행하여 관찰함!!!
  console.log('params: ', params);
  if (isRef(params) || isRef(url)) {
    watchEffect(execute);
  } else {
    if (immediate) {
      execute();
    }
  }

  return {
    response,
    loading,
    error,
    data,
    execute,
  };
};

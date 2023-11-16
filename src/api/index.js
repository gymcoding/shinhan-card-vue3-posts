import axios from 'axios';

function create(baseURL, options) {
  const config = Object.assign({ baseURL }, options);
  const instance = axios.create(config);
  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts`);
// export const users = create('http://localhost:5000/users');

import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Task 1 — intentionally requests a non-existent endpoint to trigger an error
export async function fetchFromInvalidUrl() {
  try {
    await api.get('/invalid-endpoint');
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}

// Task 2 — makes a request with custom headers and query params
export async function fetchPostsWithOptions(headers = {}, params = {}) {
  const response = await api.get('/posts', { headers, params });
  return response;
}

// Task 3 — functions used for mocking
export async function getPost(id) {
  const response = await api.get(`/posts/${id}`);
  return response.data;
}

export async function createPost(data) {
  const response = await api.post('/posts', data);
  return response.data;
}

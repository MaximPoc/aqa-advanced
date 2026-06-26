import assert from 'node:assert/strict';
import test from 'node:test';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const method = config.method?.toUpperCase();
  console.log(`[request] ${method} ${config.baseURL}${config.url}`);

  return config;
});

api.interceptors.response.use((response) => {
  const method = response.config.method?.toUpperCase();
  console.log(`[response] ${response.status} ${method} ${response.config.url}`);

  return response;
});

test('GET /posts/1 returns the expected post', async () => {
  const response = await api.get('/posts/1');

  assert.equal(response.status, 200);
  assert.deepEqual(response.data, {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  });
});

test('GET /posts?userId=1 returns posts filtered by user', async () => {
  const response = await api.get('/posts', {
    params: {
      userId: 1,
    },
  });

  assert.equal(response.status, 200);
  assert.equal(response.data.length, 10);
  assert.ok(response.data.every((post) => post.userId === 1));
  assert.deepEqual(Object.keys(response.data[0]).sort(), ['body', 'id', 'title', 'userId']);
});

test('GET /comments?postId=1 returns comments filtered by post', async () => {
  const response = await api.get('/comments', {
    params: {
      postId: 1,
    },
  });

  assert.equal(response.status, 200);
  assert.equal(response.data.length, 5);
  assert.ok(response.data.every((comment) => comment.postId === 1));
  assert.deepEqual(Object.keys(response.data[0]).sort(), ['body', 'email', 'id', 'name', 'postId']);
});

test('POST /posts creates a post resource', async () => {
  const newPost = {
    title: 'API testing with axios',
    body: 'JSONPlaceholder should return created post data with a new id.',
    userId: 1,
  };

  const response = await api.post('/posts', newPost);

  assert.equal(response.status, 201);
  assert.equal(response.data.id, 101);
  assert.equal(response.data.title, newPost.title);
  assert.equal(response.data.body, newPost.body);
  assert.equal(response.data.userId, newPost.userId);
});

test('POST /comments creates a comment resource', async () => {
  const newComment = {
    postId: 1,
    name: 'Axios homework comment',
    email: 'student@example.com',
    body: 'Testing JSONPlaceholder POST comments endpoint.',
  };

  const response = await api.post('/comments', newComment);

  assert.equal(response.status, 201);
  assert.equal(response.data.id, 501);
  assert.equal(response.data.postId, newComment.postId);
  assert.equal(response.data.name, newComment.name);
  assert.equal(response.data.email, newComment.email);
  assert.equal(response.data.body, newComment.body);
});

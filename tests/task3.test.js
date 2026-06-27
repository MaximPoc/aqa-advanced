import { jest } from '@jest/globals';
import { api, getPost, createPost } from '../src/api.js';

describe('Task 3 — Mocking Axios', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getPost', () => {
    test('returns post data on a successful mocked request', async () => {
      const mockPost = { id: 1, title: 'Mocked Post', body: 'Mocked body', userId: 1 };
      jest.spyOn(api, 'get').mockResolvedValue({ data: mockPost });

      const result = await getPost(1);

      expect(result).toEqual(mockPost);
      expect(api.get).toHaveBeenCalledWith('/posts/1');
    });

    test('throws an error on a failed mocked request', async () => {
      jest.spyOn(api, 'get').mockRejectedValue(new Error('Network Error'));

      await expect(getPost(1)).rejects.toThrow('Network Error');
    });
  });

  describe('createPost', () => {
    test('returns created post data on a successful mocked request', async () => {
      const newPost = { title: 'New Post', body: 'Body text', userId: 1 };
      const mockResponse = { ...newPost, id: 101 };
      jest.spyOn(api, 'post').mockResolvedValue({ data: mockResponse });

      const result = await createPost(newPost);

      expect(result).toEqual(mockResponse);
      expect(api.post).toHaveBeenCalledWith('/posts', newPost);
    });

    test('throws an error on a failed mocked request', async () => {
      jest.spyOn(api, 'post').mockRejectedValue(new Error('Server Error'));

      await expect(createPost({ title: 'New Post' })).rejects.toThrow('Server Error');
    });
  });
});

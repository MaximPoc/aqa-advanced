import { jest } from '@jest/globals';
import { api, fetchPostsWithOptions } from '../src/api.js';

describe('Task 2 — Request Headers and Params', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('request includes custom headers', async () => {
    const customHeaders = { 'X-Custom-Header': 'test-value', 'X-Api-Key': '12345' };
    const spy = jest.spyOn(api, 'get');

    await fetchPostsWithOptions(customHeaders, {});

    expect(spy).toHaveBeenCalledWith(
      '/posts',
      expect.objectContaining({ headers: customHeaders }),
    );
  });

  test('request includes custom query params', async () => {
    const customParams = { userId: 1, _limit: 5 };
    const spy = jest.spyOn(api, 'get');

    await fetchPostsWithOptions({}, customParams);

    expect(spy).toHaveBeenCalledWith(
      '/posts',
      expect.objectContaining({ params: customParams }),
    );
  });

  test('response is filtered correctly by userId param', async () => {
    const response = await fetchPostsWithOptions({}, { userId: 1 });

    expect(response.status).toBe(200);
    expect(response.data.every((post) => post.userId === 1)).toBe(true);
  });

  test('response is limited correctly by _limit param', async () => {
    const response = await fetchPostsWithOptions({}, { _limit: 3 });

    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(3);
  });
});

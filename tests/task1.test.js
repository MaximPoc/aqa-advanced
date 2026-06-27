import { fetchFromInvalidUrl } from '../src/api.js';

describe('Task 1 — Error Handling', () => {
  test('throws an error when requesting an invalid URL', async () => {
    await expect(fetchFromInvalidUrl()).rejects.toThrow();
  });

  test('error message contains the HTTP status code', async () => {
    await expect(fetchFromInvalidUrl()).rejects.toThrow('404');
  });

  test('error is an instance of Error', async () => {
    await expect(fetchFromInvalidUrl()).rejects.toBeInstanceOf(Error);
  });
});

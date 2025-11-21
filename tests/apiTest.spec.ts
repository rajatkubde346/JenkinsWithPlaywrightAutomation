import { test, expect } from '@playwright/test';

test('GET API Test - Users List', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(body.data.length).toBeGreaterThan(0);
});

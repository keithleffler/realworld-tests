import { test, expect } from '@playwright/test';

test.describe('Login API', () => {
  test('should return error for invalid credentials', async ({ request }) => {
    // Send a POST request to the login endpoint with invalid credentials
    const response = await request.post('/users/login', {
      data: {
        user: {
          email: 'invalid@example.com',
          password: 'invalidpassword'
        }
      }
    });

    // Verify the response status is 422 (Unprocessable Entity)
    expect(response.status()).toBe(422);

    // Verify the response contains an error message
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('errors');
  });
});

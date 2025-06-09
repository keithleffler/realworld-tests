import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should display login page', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/login');

    // Verify the login form is displayed
    const loginForm = page.locator('form');
    await expect(loginForm).toBeVisible();

    // Verify the email and password fields are present
    const emailField = page.locator('input[type="email"]');
    const passwordField = page.locator('input[type="password"]');
    await expect(emailField).toBeVisible();
    await expect(passwordField).toBeVisible();

    // Verify the sign in button is present
    const signInButton = page.locator('button', { hasText: 'Sign in' });
    await expect(signInButton).toBeVisible();
  });
});

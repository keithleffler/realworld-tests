/**
 * Selectors for the login page
 */
export const loginPageSelectors = {
  // Form
  loginForm: 'form',

  // Input fields
  emailInput: 'input[type="email"]',
  passwordInput: 'input[type="password"]',

  // Buttons
  signInButton: 'button[type="submit"]',

  // Links
  needAccountLink: 'a[href="/register"]',

  // Error messages
  errorMessages: '.error-messages li',
};

import { User, LoginCredentials, RegisterData } from '../types/user';

/**
 * Generate a random string of specified length
 * @param length Length of the random string
 * @returns Random string
 */
function generateRandomString(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generate a test user with random data
 * @returns User object with random data
 */
export function generateTestUser(): User {
  const username = `testuser_${generateRandomString(8)}`;
  const email = `${username}@example.com`;
  const password = `password_${generateRandomString(8)}`;

  return {
    username,
    email,
    password,
  };
}

/**
 * Generate login credentials for a user
 * @param user User object
 * @returns LoginCredentials object
 */
export function generateLoginCredentials(user: User): LoginCredentials {
  return {
    email: user.email,
    password: user.password,
  };
}

/**
 * Generate registration data for a user
 * @param user User object
 * @returns RegisterData object
 */
export function generateRegisterData(user: User): RegisterData {
  return {
    username: user.username,
    email: user.email,
    password: user.password,
  };
}

/**
 * Predefined test users for consistent test data
 */
export const testUsers = {
  validUser: {
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'testpassword',
  },
  invalidUser: {
    username: 'invaliduser',
    email: 'invaliduser@example.com',
    password: 'invalidpassword',
  },
};

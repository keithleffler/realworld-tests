/**
 * User interface representing a user in the RealWorld application
 */
export interface User {
  email: string;
  username: string;
  password: string;
  token?: string;
  bio?: string;
  image?: string;
}

/**
 * LoginCredentials interface representing the credentials needed for login
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * RegisterData interface representing the data needed for registration
 */
export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

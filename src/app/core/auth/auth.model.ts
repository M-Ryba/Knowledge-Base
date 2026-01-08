export interface User {
  id: number;
  email: string;
  role: 'ADMIN' | 'USER';
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

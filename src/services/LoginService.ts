// src/services/authService.ts
const API_URL = import.meta.env.VITE_AN_API_URL;

export interface LoginResponse {
  success?: boolean;
  token?: string;
  user?: {
    id: number;
    email: string;
    role: string;
  };
  expiresIn?: number;
  error?: string;
  message?: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data: LoginResponse = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || data.message || 'Login failed');
    }

    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'An error occurred');
  }
};

export const saveUserData = (data: LoginResponse) => {
  if (data.token && data.expiresIn) {
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('expiresAt', (new Date().getTime() + data.expiresIn * 1000).toString());

    if (data.user) {
      localStorage.setItem('user', JSON.stringify(data.user));
    }
  }
};

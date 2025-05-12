const API_URL = import.meta.env.VITE_AN_API_URL;
export const register = async (username: string, email: string, password: string) => {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Registration failed');
  }

  return data;
};

// Thêm type cho error response
export type AuthError = {
  message: string;
};

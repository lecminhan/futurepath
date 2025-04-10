// src/pages/LoginPage.tsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import '../styles/auth.css';
import MainLayout from '../layouts/MainLayout';
import { login, saveUserData, LoginResponse } from '../services/LoginService'; // Import service

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiResponse, setApiResponse] = useState<LoginResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsCardVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setApiResponse(null);

    try {
      const data = await login(formData.email, formData.password); // Use login from service

      if (data.success && data.token && data.expiresIn) {
        saveUserData(data); // Save user data to localStorage
      }

      navigate('/'); // Redirect after successful login
    } catch (err) {
      setApiResponse({
        success: false,
        error: err instanceof Error ? err.message : 'An error occurred'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin();
  };

  return (
    <MainLayout>
      <div className="auth-container">
        <div
          className="auth-card"
          style={{
            opacity: isCardVisible ? 1 : 0,
            transform: isCardVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h1 className="auth-title">Login</h1>

          {apiResponse?.error && (
            <div className="auth-error" style={{ color: '#FFFF' }}>
              {apiResponse.error}
            </div>
          )}

          <form onSubmit={onSubmit}>
            <div className="input-wrapper">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
              <div className="input-icon">
                <MailIcon style={{ fontSize: '18px' }} />
              </div>
            </div>

            <div className="input-wrapper">
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
              <div className="input-icon" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                {showPassword ? <LockOpenIcon style={{ fontSize: '18px' }} /> : <LockIcon style={{ fontSize: '18px' }} />}
              </div>
            </div>

            <div className="remember-forgot">
              <label className="remember-me">
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                <span>Remember Me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password
              </Link>
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <div className="auth-footer">
              Don't have an account?
              <Link to="/register" className="auth-link">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

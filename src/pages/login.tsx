import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import '../styles/auth.css';
import { login, saveUserData, LoginResponse } from '../services/LoginService'; // Import service
import { useNotification } from '../services/NotificationServices'; // Import NotificationContext

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
  const { showNotification } = useNotification(); // Dùng notification context
  const navigate = useNavigate(); // Navigate hook

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
      const data = await login(formData.email, formData.password);

      if (data.success && data.token && data.expiresIn) {
        saveUserData(data);
        showNotification('Đăng nhập thành công!', 'success'); // Success notification
        
        // Navigate to appropriate page based on role
        if (data.user?.role === 'Expert') {
          navigate('/overview');  // Navigate to Expert Overview
        } else {
          navigate('/');  // Navigate to homepage or another page for students
        }
      }
    } catch (err) {
      setApiResponse({
        success: false,
        error: err instanceof Error ? err.message : 'An error occurred'
      });
      showNotification('Đăng nhập thất bại!', 'error'); // Failure notification
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin();
  };

  return (
    <div className="auth-container">
      <div className="video-container">
        <video width="100%" height="auto" autoPlay muted loop>
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="auth-card"
        style={{
          opacity: isCardVisible ? 1 : 0,
          transform: isCardVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <h1 className="auth-title">Chào mừng trở lại</h1>

        {apiResponse?.error && (
          <div className="auth-error" style={{ color: '#FFFF' }}>
            {apiResponse.error}
          </div>
        )}

        <form className="auth-form" onSubmit={onSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div className="input-icon">
              <MailIcon style={{ fontSize: '18px' }} />
            </div>
          </div>

          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div
              className="input-icon"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? <LockOpenIcon style={{ fontSize: '18px' }} /> : <LockIcon style={{ fontSize: '18px' }} />}
            </div>
          </div>

          <div className="remember-forgot">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Nhớ mật khẩu</span>
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Quên mật khẩu
            </Link>
          </div>

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? 'Đang xử lý....' : 'Đăng nhập'}
          </button>

          <div className="auth-footer">
            Bạn chưa có tài khoản?
            <Link to="/register" className="auth-link">
              Đăng ký
            </Link>
          </div>
        </form>

        {/* Additional Login Options */}
        <div className="social-login">
          <button className="social-button google-button">
            <GoogleIcon style={{ fontSize: '18px' }} />
            Đăng nhập với Google
          </button>
          <button className=" microsoft-button" >
            <MicrosoftIcon style={{ fontSize: '18px' }} />
            Đăng nhập với Microsoft
          </button>
          <button className=" phone-button">
            <PhoneIcon style={{ fontSize: '18px' }} />
            Đăng nhập với Điện thoại
          </button>
        </div>
      </div>
    </div>
  );
}

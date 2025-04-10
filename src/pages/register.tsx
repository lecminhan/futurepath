import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import '../styles/auth.css';
import MainLayout from '../layouts/MainLayout';

interface RegisterResponse {
  user?: {
    id: string;
    username: string;
    email: string;
  };
  error?: string;
  message?: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiResponse, setApiResponse] = useState<RegisterResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Check password match
  useEffect(() => {
    if (formData.confirmPassword) {
      setPasswordsMatch(formData.password === formData.confirmPassword);
    }
  }, [formData.password, formData.confirmPassword]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = async () => {
    setIsLoading(true);
    setApiResponse(null);

    try {
      const response = await fetch('http://localhost:3004/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data: RegisterResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Registration failed');
      }

      setApiResponse(data);

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setApiResponse({
        error: err instanceof Error ? err.message : 'An error occurred'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    await handleRegister();
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
          <h1 className="auth-title">Register</h1>

          {/* Hiển thị thông báo từ API */}
          {apiResponse?.error && <div className="auth-error">{apiResponse.error}</div>}

          {apiResponse?.user && <div className="auth-success">Registration successful! Redirecting to login...</div>}

          <form onSubmit={onSubmit}>
            <div className="input-wrapper">
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required minLength={3} />
              <div className="input-icon">
                <PersonIcon style={{ fontSize: '18px' }} />
              </div>
            </div>

            <div className="input-wrapper">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
              <div className="input-icon">
                <MailIcon style={{ fontSize: '18px' }} />
              </div>
            </div>

            <div className="input-wrapper">
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required minLength={8} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character" />
              <div className="input-icon" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                {showPassword ? <LockOpenIcon style={{ fontSize: '18px' }} /> : <LockIcon style={{ fontSize: '18px' }} />}
              </div>
            </div>

            <div className="input-wrapper">
              <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Re-enter Password" value={formData.confirmPassword} onChange={handleInputChange} className={!passwordsMatch ? 'password-mismatch' : ''} required />
              <div className="input-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                {showConfirmPassword ? <LockOpenIcon style={{ fontSize: '18px' }} /> : <LockIcon style={{ fontSize: '18px' }} />}
              </div>
            </div>

            {!passwordsMatch && <div className="password-error">Passwords do not match</div>}

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </button>

            <div className="auth-footer">
              Already have an account?
              <Link to="/login" className="auth-link">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

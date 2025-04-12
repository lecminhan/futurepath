import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quizzes from './pages/Quizzs';
import ForOgarnizations from './pages/ForOgarnizations';
import Home from './pages/home'
import Login from './pages/login';
import Register from './pages/register';
import ForgotPasswordPage from './pages/forgot-password';
import DiscordCommunityPage from './pages/Community';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes/>} />
          <Route path="/forogarnizations" element={<ForOgarnizations/>} />          
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/community" element={<DiscordCommunityPage />} />
      </Routes>
    </Router>
  );
}

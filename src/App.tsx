import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quizzes from './pages/Quizzs';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Degrees from './pages/Degrees';
import Community from './pages/Community';
import ForgotPasswordPage from './pages/forgot-password';
import MBTIQuizPage from './pages/MBTI-QuizPage';
import HollandQuizPage from './pages/Holland-QuizPage';
import { NotificationProvider } from './services/NotificationServices';
import QuizResultMBTI from './pages/MBTIQuizResult';
import QuizResultHolland from './pages/HolladQuizResult';

export default function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/degrees" element={<Degrees />} />
          <Route path="/community" element={<Community />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/mbtiquizpage" element={<MBTIQuizPage />} />
          <Route path="/hollandquiz" element={<HollandQuizPage />} />
          <Route path="/quizresultmbti" element={<QuizResultMBTI />} />
          <Route path="/quizresultholland" element={<QuizResultHolland />} />
        </Routes>
      </Router>
    </NotificationProvider>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quizzes from './pages/Quizzs';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Community from './pages/Community';
import ForgotPasswordPage from './pages/forgot-password';
import MBTIQuizPage from './pages/MBTI-QuizPage';
import HollandQuizPage from './pages/Holland-QuizPage';
import { NotificationProvider } from './services/NotificationServices';
import QuizResultMBTI from './pages/MBTIQuizResult';
import QuizResultHolland from './pages/HolladQuizResult';
import DiscordCommunityPage from './pages/Community';
import ChatPage from './pages/AiChatBox';
import PointAnalyst from './pages/pointAnalyst';
export default function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatpage" element={<ChatPage/>} />
          <Route path="/community" element={<Community />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/mbtiquizpage" element={<MBTIQuizPage />} />
          <Route path="/hollandquiz" element={<HollandQuizPage />} />
          <Route path="/quizresultmbti" element={<QuizResultMBTI />} />
          <Route path="/quizresultholland" element={<QuizResultHolland />} />
          <Route path="/community" element={<DiscordCommunityPage />} />
          <Route path="/careerform" element={<PointAnalyst/>} />
        </Routes>
      </Router>
    </NotificationProvider>
  );
}

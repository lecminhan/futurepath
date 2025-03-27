import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quizzes from './pages/Quizzs';
import Home from './pages/home'
import Login from './pages/login';
import Register from './pages/register';
import Degrees from './pages/Degrees';
import Community from './pages/Community';
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/degrees" element={<Degrees />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

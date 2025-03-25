import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quizzes from './pages/Quizzs';
import ForOgarnizations from './pages/ForOgarnizations';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes/>} />
          <Route path="/forogarnizations" element={<ForOgarnizations/>} />          
        </Routes>
    </Router>
  );
}

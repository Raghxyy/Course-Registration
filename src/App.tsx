import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/faculty/*" element={<FacultyDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
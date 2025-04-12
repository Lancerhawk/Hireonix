import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Auth/LoginForm/LoginForm';
import SignupForm from './Auth/SignUpForm/SignupForm';
import UserProfile from './Pages/UserProfile/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

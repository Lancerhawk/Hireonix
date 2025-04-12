import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'jobseeker'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store role in localStorage
    localStorage.setItem('role', formData.role === 'hr' ? 'HR' : 'JobSeeker');
    console.log('Form submitted:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Welcome, Hireonix</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="jobseeker">Job Seeker</option>
            <option value="hr">HR</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <p className="form-divider">Don't have an account? <a href="/signup" onClick={(e) => { e.preventDefault(); navigate('/signup'); }} className="signup-link">Sign Up</a></p>
    </div>
  );
}

export default LoginForm;
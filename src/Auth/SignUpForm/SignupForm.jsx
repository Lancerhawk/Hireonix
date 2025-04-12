import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'jobseeker'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRoleChange = (role) => {
    setFormData(prevState => ({
      ...prevState,
      role: role
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1>Create Your Account</h1>
      <div className="role-selector">
        <button
          className={`role-btn ${formData.role === 'jobseeker' ? 'active' : ''}`}
          onClick={() => handleRoleChange('jobseeker')}
        >
          Job Seeker
        </button>
        <button
          className={`role-btn ${formData.role === 'hr' ? 'active' : ''}`}
          onClick={() => handleRoleChange('hr')}
        >
          HR
        </button>
      </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
      <p className="form-divider">Already have an account? <a href="#" onClick={() => navigate('/')} className="signup-link">Login</a></p>
    </div>
  );
}

export default SignupForm;
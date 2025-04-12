import { useState } from 'react';
import './HRProfile.css';
import photo1 from '../../assets/Untitled design (8).jpg';
function HRProfile() {
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [interviewData, setInterviewData] = useState({
    candidateName: '',
    companyName: ''
  });

  const handleInterviewSubmit = (e) => {
    e.preventDefault();
    // Handle interview scheduling logic
  };

  return (
    <div className="hr-profile">
      <nav className="hr-navbar">
        <h1>HR Dashboard</h1>
        <div className="nav-links">
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link">Candidates</a>
          <a href="#" className="nav-link">Interviews</a>
          <a href="#" className="nav-link">Reports</a>
        </div>
        <div className="nav-profile">
          <img src={photo1} alt="Profile" />
          <span>HR Manager</span>
        </div>
      </nav>
      {/* Welcome Header Section */}
      <header className="welcome-header">
        <div className="profile-image">
          <img src={photo1} alt="HR Profile" />
        </div>
        <div className="welcome-text">
          <h1>Welcome, HR Team!</h1>
          <p>Manage your recruitment process efficiently</p>
        </div>
        <button className="profile-cta">Create New Job Listing</button>
      </header>

      {/* Latest Candidate Matches Section */}
      <section className="candidate-matches">
        <h2>Latest Candidate Matches</h2>
        <div className="candidate-cards">
          <div className="candidate-card">
            <img src={photo1} alt="John Doe" />
            <h3>John Doe</h3>
            <p>Software Developer</p>
            <p>5 years experience</p>
          </div>
          <div className="candidate-card">
            <img src={photo1} alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>UX Designer</p>
            <p>3 years experience</p>
          </div>
          <div className="candidate-card">
            <img src={photo1} alt="Alex Johnson" />
            <h3>Alex Johnson</h3>
            <p>Product Manager</p>
            <p>7 years experience</p>
          </div>
        </div>
      </section>

      {/* Schedule Interview Section */}
      <section className="schedule-interview">
        <h2>Schedule Interview</h2>
        <form onSubmit={handleInterviewSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Candidate Name"
              value={interviewData.candidateName}
              onChange={(e) => setInterviewData({...interviewData, candidateName: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Company Name"
              value={interviewData.companyName}
              onChange={(e) => setInterviewData({...interviewData, companyName: e.target.value})}
            />
          </div>
          <button type="submit">Schedule Interview</button>
        </form>
      </section>

      {/* Employee Feedback Analysis Section */}
      <section className="feedback-analysis">
        <h2>Employee Feedback Analysis</h2>
        <div className="feedback-stats">
          <div className="stat-card">
            <h3>87%</h3>
            <p>Satisfaction Rate</p>
          </div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Response Rate</p>
          </div>
        </div>
        <div className="feedback-chart">
          {/* Placeholder for chart */}
          <div className="chart-bars">
            <div className="bar" style={{height: '80%'}}></div>
            <div className="bar" style={{height: '65%'}}></div>
            <div className="bar" style={{height: '45%'}}></div>
            <div className="bar" style={{height: '70%'}}></div>
            <div className="bar" style={{height: '55%'}}></div>
            <div className="bar" style={{height: '75%'}}></div>
            <div className="bar" style={{height: '50%'}}></div>
          </div>
        </div>
      </section>

      {/* Candidate Examinations Feedback Section */}
      <section className="examination-feedback">
        <h2>Candidate Examinations Feedback</h2>
        <div className="feedback-cards">
          <div className="feedback-card">
            <h3>Technical Test</h3>
            <div className="rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
            </div>
            <p>85% success rate</p>
          </div>
          <div className="feedback-card">
            <h3>Soft Skills</h3>
            <div className="rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p>92% success rate</p>
          </div>
          <div className="feedback-card">
            <h3>Culture Fit</h3>
            <div className="rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
            </div>
            <p>88% success rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HRProfile;
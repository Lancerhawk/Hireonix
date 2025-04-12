import React from "react";
import "./JobSeekerProfile.css";

function JobSeekerProfile() {
  return (
    <div className="job-seeker-profile">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Post Job</li>
            <li>View Applicants</li>
            <li>Shortlisting & Tests</li>
            <li>Interview Scheduling</li>
            <li>Employee Insights</li>
            <li>Feedback Reports</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <div className="statistics">
          <div className="stat-card">
            <h3>Total Applicants</h3>
            <p>123</p>
          </div>
          <div className="stat-card">
            <h3>Shortlisted Candidates</h3>
            <p>34</p>
          </div>
          <div className="stat-card">
            <h3>Test Completion Rate</h3>
            <p>78%</p>
          </div>
          <div className="stat-card">
            <h3>Attrition Risk Alerts</h3>
            <p>5</p>
          </div>
        </div>
        <div className="candidate-tracker">
          <h2>Candidate Tracker</h2>
          <table>
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>AI Match %</th>
                <th>Test Score</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul S.</td>
                <td>92%</td>
                <td>88</td>
                <td className="status shortlisted">Shortlisted</td>
                <td>Strong coding skills</td>
              </tr>
              <tr>
                <td>Priya M.</td>
                <td>73%</td>
                <td>60</td>
                <td className="status rejected">Rejected</td>
                <td>Lacks experience</td>
              </tr>
              <tr>
                <td>Amit K.</td>
                <td>60%</td>
                <td>56</td>
                <td className="status tested">Tested</td>
                <td>Weak logical reasoning</td>
              </tr>
              <tr>
                <td>Anjali P.</td>
                <td>75%</td>
                <td>73</td>
                <td className="status tested">Tested</td>
                <td>Good problem-solving</td>
              </tr>
              <tr>
                <td>Suresh Y.</td>
                <td>88%</td>
                <td>60</td>
                <td className="status shortlisted">Shortlisted</td>
                <td>Good candidate skills</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default JobSeekerProfile;
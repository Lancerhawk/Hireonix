import HRProfile from '../HR/HRProfile';
import JobSeekerProfile from '../JobSeeker/JobSeekerProfile';

function UserProfile() {
  const role = localStorage.getItem('role');

  if (role === 'HR') {
    return <HRProfile />;
  } else if (role === 'JobSeeker') {
    return <JobSeekerProfile />;
  }

  return (
    <>
      <h2>Please log in to view your profile</h2>
    </>
  );
}

export default UserProfile;
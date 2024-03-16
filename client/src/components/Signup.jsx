
import React ,{useState}from 'react';
import { Navigate } from 'react-router-dom';
const Signup = () => {

  const [showAdminSignup, setShowAdminSignup] = useState(false);
  const [showCandidateSignup, setShowCandidateSignup] = useState(false);

  const handleAdminSignupClick = () => {
    setShowAdminSignup(true);
  };

  const handleCandidateSignupClick = () => {
    setShowCandidateSignup(true);
  };
  

  if (showAdminSignup) {
    return <Navigate to="/admin-Signup" />;
  }

  if (showCandidateSignup) {
    return <Navigate to="/candidate-Signup" />;
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">SignUp As</h1>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={handleAdminSignupClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Admin SignUp
        </button>
        <button onClick={handleCandidateSignupClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Candidate SignUp
        </button>
      </div>
      
    </div>
  </div>
  );
};

export default Signup;

import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {

  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showCandidateLogin, setShowCandidateLogin] = useState(false);

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
    
  };

  const handleCandidateLoginClick = () => {
    setShowCandidateLogin(true);

  };

  if (showAdminLogin) {
    return <Navigate to="/admin-login" />;
  }

  if (showCandidateLogin) {
    return <Navigate to="/candidate-login" />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleAdminLoginClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Admin Login
          </button>
          <button onClick={handleCandidateLoginClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Candidate Login
          </button>
        </div>
        <a href="/forgot-password" className="block mt-4 text-blue-500">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;

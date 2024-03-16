import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import CandidateLogin from './components/CandidateLogin';
import AdminSignup from './components/AdminSignup';
import CandidateSignup from './components/CandidateSignup';
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import ResumeUploader from './components/ResumeUploader';
import ErrorPage from './components/ErrorPage'; // Import the ErrorPage component

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/candidate-login" element={<CandidateLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/candidate-signup" element={<CandidateSignup />} />
          <Route path="/resume-uploader" element={<ResumeUploader />} />
          {/* Catch-all route for any unmatched URLs */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

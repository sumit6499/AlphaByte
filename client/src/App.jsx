
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import CandidateLogin from './components/CandidateLogin';
import AdminSignup from './components/AdminSignup'; // Import the AdminSignup component
import CandidateSignup from './components/CandidateSignup'; // Import the CandidateSignup component
import { BrowserRouter } from "react-router-dom";
import Home from  './components/Home';
import ResumeUploader from './components/ResumeUploader'; // Import the ResumeUploader component
import JobListing from './components/JobListing';
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
          <Route path="/admin-Signup" element={<AdminSignup />} /> {/* Route to the AdminSignup component */}
          <Route path="/candidate-Signup" element={<CandidateSignup />} /> {/* Route to the CandidateSignup component */}
          <Route path="/resume-uploader" element={<ResumeUploader />} /> {/* Add route for the ResumeUploader component */}
          <Route path="/Job-listing" element={<JobListing/>} />


          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

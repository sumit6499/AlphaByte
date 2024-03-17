import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import CandidateLogin from "./components/CandidateLogin";
import AdminSignup from "./components/AdminSignup"; // Import the AdminSignup component
import CandidateSignup from "./components/CandidateSignup"; // Import the CandidateSignup component
// import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ResumeUploader from "./components/ResumeUploader"; // Import the ResumeUploader component
import JobListing from "./components/JobListing";
import ErrorPage from "./components/ErrorPage"; // Import the ErrorPage component
import JobPostForm from "./components/JobPostForm";
import Footer from "./components/Footer"; // Import the Footer component
import About from "./components/About";
import CompanyPage from './components/CompanyPage';
import CandidateList from "./components/CandidateList";

const App = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div style={{ paddingBottom: "150px" }}>
        {" "}
        {/* Ensure space for footer */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/candidate-login" element={<CandidateLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />{" "}
          {/* Route to the AdminSignup component */}
          <Route path="/candidate-signup" element={<CandidateSignup />} />{" "}
          {/* Route to the CandidateSignup component */}
          <Route path="/resume-uploader" element={<ResumeUploader />} />{" "}
          {/* Add route for the ResumeUploader component */}
          <Route path="/job-listing" element={<JobListing />} />
          <Route path="/job-post" element={<JobPostForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/company-page" element={<CompanyPage />} />
           <Route path="/candidate-list" element={<CandidateList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer style={{ marginTop: "50px" }} />{" "}
      {/* Footer component with margin top */}
    </div>
  );
};

export default App;

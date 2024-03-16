import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import CandidateLogin from './components/CandidateLogin';
import AdminSignup from './components/AdminSignup'; // Import the AdminSignup component
import CandidateSignup from './components/CandidateSignup'; // Import the CandidateSignup component
import Services from './components/Services'; // Import the Services component

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/candidate-login" element={<CandidateLogin />} />
          <Route path="/admin-Signup" element={<AdminSignup />} /> {/* Route to the AdminSignup component */}
          <Route path="/candidate-Signup" element={<CandidateSignup />} /> {/* Route to the CandidateSignup component */}
          <Route path="/services" element={<Services />} /> {/* New Route for Services component */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



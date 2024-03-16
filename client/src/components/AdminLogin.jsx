import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here for admin login
    console.log('Admin Email:', email);
    console.log('Admin Password:', password);

    // Example: Sending admin login request using Axios
    axios.post('/admin-login', { email, password })
      .then((response) => {
        console.log(response.data);
        // Handle successful admin login response
        // Redirect to admin dashboard or desired page
        history.push('/admin-dashboard');
      })
      .catch((error) => {
        console.error('Admin Login error:', error);
        // Handle admin login error
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-email" className="block">Email:</label>
            <input
              type="email"
              id="admin-email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="admin-password" className="block">Password:</label>
            <input
              type="password"
              id="admin-password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Admin Login
          </button>
        </form>
        <a href="/forgot-password" className="block mt-4 text-blue-500">Forgot Password?</a>
      </div>
    </div>
  );
};

export default AdminLogin;


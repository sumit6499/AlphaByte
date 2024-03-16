import React, { useState } from 'react';
// import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., call an authentication API
    console.log('Email:', email);
    console.log('Password:', password);

    // Example: Sending login request using Axios
    axios.post('/login', { email, password })
      .then((response) => {
        console.log(response.data);
        // Handle successful login response
      })
      .catch((error) => {
        console.error('Login error:', error);
        // Handle login error
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Login
          </button>
        </form>
        <a href="/forgot-password" className="block mt-4 text-blue-500">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;

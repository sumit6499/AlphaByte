import React, { useState } from 'react';
import axios from 'axios';

export default function AdminSignup  ()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // Added state for passwords matching
  const [loading,setLoading]=useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // If passwords don't match, clear password and confirm password fields
      setPassword('');
      setConfirmPassword('');
      setPasswordsMatch(false);

      return; // Exit early without further processing
    }

    // Add your signup logic here, e.g., call an API to register the user
    console.log('Admin Email:', email);
    console.log('Admin Password:', password);
    console.log('Admin Confirm Password:', confirmPassword);
    attemptSignUp();

  }

    // Example: Sending signup request using Axios

    const attemptSignUp=()=>{
      try {
        const options = {
          method: 'POST',
          url: 'http://localhost:3000/api/v1/auth/admin/signup',
          data: {email: email, password: password}
        };
        setLoading(true)
        axios.request(options)
              .then( (response)=>{
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
      } catch (error) {
        console.error(error)
      }
      finally{
        setLoading(false)
      }
    }
   

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Sign Up</h1>
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
              className={`w-full border-gray-300 rounded-md px-3 py-2 ${!passwordsMatch ? 'border-red-500' : ''}`} // Added conditional border color
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`w-full border-gray-300 rounded-md px-3 py-2 ${!passwordsMatch ? 'border-red-500' : ''}`} // Added conditional border color
            />
          </div>
          {!passwordsMatch && <p className="text-red-500">Passwords do not match!</p>} {/* Added error message */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            {loading?"Loading..":"Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

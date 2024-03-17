import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'

const CandidateLogin = () => {
  const [success,setIssuccess] = useState(false);
  const navigate=useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const [loading,setLoading]=useState(false)

  const attemptSignUp=()=>{
    try {
      const options = {
        method: 'POST',
        url: 'http://localhost:3000/api/v1/auth/candidate/login',
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
      toast.error(error)
    }
    finally{
      setLoading(false)
      toast.success("Login Successful")
      navigate('"/job-listing"')
    }
  }


  const handlesuccess = () =>{
    setIssuccess(true)
  }
  if(success)
  {
    return <Navigate to= "/job-listing"/>;
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here for candidate login
    console.log('Candidate Email:', email);
    console.log('Candidate Password:', password);

    // Example: Sending candidate login request using Axios
    attemptSignUp()
    Navigate('/job-listing"')
  };

  return (
    <ToastContainer>
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Candidate Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="candidate-email" className="block">Email:</label>
            <input
              type="email"
              id="candidate-email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="candidate-password" className="block">Password:</label>
            <input
              type="password"
              id="candidate-password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"onClick={handlesuccess}>
             Login
          </button>
        </form>
        <a href="/forgot-password" className="block mt-4 text-blue-500">Forgot Password?</a>
      </div>
    </div>
    </ToastContainer>
  );
};

export default CandidateLogin;

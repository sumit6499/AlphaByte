import React, { useState } from 'react';
// import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    // Add your signup logic here, e.g., call an API to register the user
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Example: Sending signup request using Axios
    axios.post('/signup', { email, password, confirmPassword })
      .then((response) => {
        console.log(response.data);
        // Handle successful signup response
      })
      .catch((error) => {
        console.error('Signup error:', error);
        // Handle signup error
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
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
          <div>
            <label htmlFor="confirmPassword" className="block">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
// import React, { useState } from 'react';
// // import axios from 'axios';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your signup logic here, e.g., call an API to register the user
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Confirm Password:', confirmPassword);

//     // Example: Sending signup request using Axios
//     axios.post('/signup', { email, password, confirmPassword })
//       .then((response) => {
//         console.log(response.data);
//         // Handle successful signup response
//       })
//       .catch((error) => {
//         console.error('Signup error:', error);
//         // Handle signup error
//       });
//   };

//   return (
//     <div className="relative min-h-screen">
//       {/* Animative Illustration */}
//       <svg
//         id="freepik_stories-sign-in"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1230 768"
//         className="absolute inset-0 z-0"
//       >
//         {/* SVG Content */}
//         {/* Place your SVG content here */}
           
//       </svg>

//       {/* Signup Form */}
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="bg-white p-8 rounded shadow-md z-10">
//           <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className="w-full border-gray-300 rounded-md px-3 py-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 className="w-full border-gray-300 rounded-md px-3 py-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="block">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//                 className="w-full border-gray-300 rounded-md px-3 py-2"
//               />
//             </div>
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

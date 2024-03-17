import React, { useState } from 'react';
import axios from 'axios';

const CompanyPage = () => {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('resume', resume);

    // Example: Sending resume upload request using Axios
    axios.post('/upload-resume', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log('Resume upload successful:', response.data);
      // Handle successful upload response
    })
    .catch((error) => {
      console.error('Resume upload error:', error);
      // Handle upload error
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutralSilver">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Company Page</h1>
        <h2 className="text-lg font-semibold mb-2">Company Description</h2>
        <p>
       <strong >Software Engineer</strong>
        <br/>
        <strong >Company</strong>: TechCo
        <br/>
        <strong>Experience Required</strong>: 3 years
        <br/>
        <strong>Required Skills</strong>: JavaScript, React, Node.js
        <br/>
        TechCo is seeking an experienced software engineer proficient in JavaScript, React, and Node.js to join our team.
        </p>
        <h2 className="text-lg font-semibold mb-2 mt-4">Upload Your Resume</h2>
        <input
          type="file"
          onChange={handleResumeChange}
          accept=".pdf"
          className="border-gray-300 rounded-md px-3 py-2 mb-4"
        />
        <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Upload
        </button>
      </div>
    </div>
  );
};

export default CompanyPage;

// import React, { useState } from 'react';
// import axios from 'axios';

// const ResumeUploader = () => {
//   const [file, setFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('resume', file);

//     try {
//       const response = await axios.post('/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//           setUploadProgress(progress);
//         },
//       });
//       setUploadStatus('Upload successful.');
//       console.log('Response:', response.data);
//     } catch (error) {
//       setUploadStatus('Upload failed.');
//       console.error('Upload error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Resume Uploader</h2>
//       <input type="file" accept=".pdf" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {uploadProgress > 0 && <p>Upload progress: {uploadProgress}%</p>}
//       {uploadStatus && <p>{uploadStatus}</p>}
//     </div>
//   );
// };

// export default ResumeUploader;
// ResumeUploader.jsx
import React, { useState } from "react";
import axios from "axios";
import Fileupl from "../assets/fileupl.png";

const ResumeUploader = () => {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

<<<<<<< HEAD
  const handleUpload=()=>{

    const id=1

    if(!resume){
      alert('Please select file');
      return;
    }
    const formdata = new FormData();
    formdata.append("resume", resume);

    axios.post(`http://localhost:3000/api/v1/auth/candidate/upload`,formdata,{
      onUploadProgress:(progressEvent)=>{console.log(progressEvent.progress*100)},
      headers:{
        'Content-Type': 'multipart/form-data',
      }
    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.error(err))

  }
  
=======
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("resume", resume);

    // Example: Sending resume upload request using Axios
    axios
      .post("/upload-resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Resume upload successful:", response.data);
        // Handle successful upload response
      })
      .catch((error) => {
        console.error("Resume upload error:", error);
        // Handle upload error
      });
  };
>>>>>>> d9b485e86fb87995c717b6fcb840b2032c3f6e9e

  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-neutralSilver`}
    >
      <img src={Fileupl} alt="" className="w-1/3" />
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Upload Your Resume</h1>
        <input
          type="file"
          onChange={handleResumeChange}
          accept=".pdf"
          className="border-gray-300 rounded-md px-3 py-2 mb-4"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default ResumeUploader;

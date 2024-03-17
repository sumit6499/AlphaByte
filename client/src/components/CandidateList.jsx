import React, { useEffect, useState } from 'react';
import axios from "axios";
import CandidateLogin from './CandidateLogin';

const CandidateList = ({ candidates }) => {



  useEffect(()=>{
   

  const options = {method: 'GET', url: 'http://localhost:3000/api/v1/auth/admin/getResume'};

  axios.request(options).then( function(response) {
        console.log(response.data.data)
    }).catch(function (error) {
      console.error(error);
    });
  })


  // Dummy candidate data
  const dummyCandidates = [
    { id: 1, fullname: 'Nitin Patil' ,resume:"https://alphabyte-resume.s3.ap-south-1.amazonaws.com/Nitin+Patil.pdf",score:"65%",feedback:`MissingKeywords":"Software Development Life Cycle (SDLC)","Data Analysis","Database Management","Machine Learning","Deep Learning","Big Data","Profile Summary":"Shreya Bhandari is a Python Developer with experience in Business Analysis, Event Management, and Graphic Design. Her diverse skill set and enthusiasm for AI/ML make her a potential fit for roles in software development and data science. To enhance her resume for competitive job markets, it is recommended to highlight her technical skills, particularly in data analysis, ML, and database management. Additionally, incorporating industry-specific keywords and quantifying her achievements would strengthen her application.`},
    { id: 2, fullname: 'Shreya Bhandari', resume:"https://alphabyte-resume.s3.ap-south-1.amazonaws.com/Shreya+Bhandari.pdf" ,score:"65%",description:`"MissingKeywords":"Software Development Lifecycle","Agile","AWS","Git","Docker","Kubernetes"],"Profile Summary":"As an ATS, I've evaluated your resume against the job description and found a match of 58%. Some highly relevant keywords like 'Software Development Lifecycle,' 'Agile,' 'AWS,' 'Git,' 'Docker,' and 'Kubernetes' are missing from your resume.`},
    { id: 3, fullname: 'Pramod Mahajan',resume:"https://alphabyte-resume.s3.ap-south-1.amazonaws.com/Pramod+Mahajan.pdf",
    score:"58%",
    description:`"MissingKeywords":"Data Analysis","Data Visualization","Machine Learning","Deep Learning","Data Mining","Statistical Modeling","Data Management","Profile Summary":null` },
    // Add more dummy data as needed
  ];

  // Use either provided candidates or dummy data if not provided
  const candidateData = candidates || dummyCandidates;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Candidate List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sr. No.
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Candidate Name
            </th>
            <th scope="col" className="relative px-6 py-3 ">
              <span className="sr-only text-gray-500 uppercase">View Resume</span>
            </th>
            <th scope="col" className="relative px-6 py-3 text-gray-500 uppercase tracking-wider">
              <span className="sr-only text-gray-500 ">Resume Score</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* {data.data} */}
          {candidateData.map((candidate, index) => (
            <tr key={candidate.id}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{candidate.fullname}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a className="text-blue-500" href={candidate.resume}>View Resume</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a className="text-green-500">{candidate.score}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;

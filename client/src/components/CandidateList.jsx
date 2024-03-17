import React, { useEffect, useState } from 'react';
import axios from "axios";

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
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
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
              <td className="px-6 py-4 whitespace-nowrap">{candidate.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-500">View Resume</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-green-500">Send Feedback</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;

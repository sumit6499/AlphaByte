
import React from 'react';

const CandidateList = ({ candidates }) => {
  // Dummy candidate data
  const dummyCandidates = [
    { 
      id: 1, 
      name: 'John Doe',
      links: ['https://example.com/resume', ],
      paths: ['/resume',]
    },
    { 
      id: 2, 
      name: 'Jane Smith',
      links: ['https://example.com/resume2', ],
      paths: ['/resume2', ]
    },
    { 
      id: 3, 
      name: 'Michael Johnson',
      links: ['https://example.com/resume3', ],
      paths: ['/resume3', ]
    },
    
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
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {candidateData.map((candidate, index) => (
            <tr key={candidate.id}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{candidate.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {candidate.links.map((link, i) => (
                  <a key={i} href={link} className="text-blue-500 mr-2">View {candidate.paths[i]}</a>
                ))}
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

import React, { useState } from 'react';

const JobListing = () => {
  const [jobPostings] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCo',
      experience: 3,
      requiredSkills: ['JavaScript', 'React', 'Node.js'],
      description: 'TechCo is seeking an experienced software engineer proficient in JavaScript, React, and Node.js to join our team.',
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'DataCorp',
      experience: 5,
      requiredSkills: ['Python', 'Machine Learning', 'Data Analysis'],
      description: 'DataCorp is looking for a skilled data scientist with expertise in Python, machine learning, and data analysis to work on our latest projects.',
    },
    // Add more job postings as needed
  ]);

  const handleApply = (jobId) => {
    // Handle the apply logic here, e.g., send an application request to the server
    console.log(`Applying for job with ID ${jobId}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-30 mt-20">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Job Listings</h1>
        {jobPostings.map((job) => (
          <div key={job.id} className="border border-gray-300 rounded-md p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Experience Required:</strong> {job.experience} years</p>
            <p><strong>Required Skills:</strong> {job.requiredSkills.join(', ')}</p>
            <p>{job.description}</p>
            <button
              onClick={() => handleApply(job.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition-colors block mx-auto"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;

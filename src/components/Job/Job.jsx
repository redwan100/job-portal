import React from 'react'

const Job = (job) => {
  return (
    <div className="bg-[#7E90FE]/10 py-8 space-y-4 mt-8 rounded-md shadow-sm text-center">
      <p className="w-12 h-12 p-2 rounded-sm bg-[#7E90FE]/20 text-[#7E90FE] mx-auto"> {<job.icon />} </p>
      <p className='font-medium'>{job.title}</p>
      <small className='text-gray-600'>{job.jobAvailable}</small>
    </div>
  );
};

export default Job
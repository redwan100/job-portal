import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {MapPinIcon} from '@heroicons/react/24/outline'
const JobDetails = () => {
  const dynamic = useParams();
  const [jobs, setJob] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      const res = await fetch(`../../../public/futured.json`);
      const data = await res.json();

      setJob(data);
    };
    handleData();
  }, []);

  // ============== Condition Checking============
  if (jobs.length) {
    const f = jobs.find((job) => job.id == dynamic.jobId);
    setJob(f);
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold text-center my-7 mt-8">
        {jobs.title} Job Details
      </h1>

      <div>
        {/* =========JOB DATA  =========== */}
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-lg">
              Job Description:
              <span className="font-normal text-base text-gray-500 ml-1">
                {jobs.jobDescription}
              </span>
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg">
              Job Responsibility:
              <span className="font-normal text-base text-gray-500 ml-1">
                {jobs.jobDescription}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">Education Requirement</p>
            <p className="font-normal text-base text-gray-500">
              {jobs.educationalRequirements}
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">Experiences</p>
            <p className="font-normal text-base text-gray-500">
              {jobs.experiences}
            </p>
          </div>
        </div>

        {/* ============= JOB CARD DATA ========== */}
        <div></div>
        <div className="border p-3">
          <h1>Job Details</h1>

          <div>
            <MapPinIcon className="w-5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

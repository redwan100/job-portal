import React from "react";
import {MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
const SingleAppliedJob = ({
  title,
  companyImage,
  companyName,
  jobTypes,
  location,
  salary,
  id
}) => {
  return (
    <div className="border p-2 flex justify-between items-center rounded-md">
  
      <div className="flex flex-col md:flex-row  md:items-center gap-3">
        <div className="w-32 h-32 bg-slate-300 grid place-content-center p-2 rounded-md">
          
          <img className="" src={companyImage} alt={title} />
        </div>

        {/* ========== Job Details ========= */}
        <div className="space-y-3">
          {/* ========= company info =========  */}
          <p className="font-semibold">{title}</p>
          <small>{companyName}</small>

          {/* =====Buttons=====  */}
          <div className="flex flex-col gap-2 sm:flex-row">
            {jobTypes.map((jobType) => (
              <button
                type="button"
                className="border border-[#9873ff] mr-2 px-1 text-[#612cf3] rounded-sm"
              >
                {jobType}
              </button>
            ))}
          </div>
          {/* company location  */}
          <div className="flex gap-1 flex-col text-sm md:gap-4 md:flex-row ">
            <p className="flex items-center">
              <MapPinIcon className="w-5 text-[#9873ff] mr-1" />
              {location}
            </p>
            <p className="flex items-center">
              <CurrencyDollarIcon className="w-5 text-[#9873ff] mr-1" />
              {salary}
            </p>
          </div>
        </div>
      </div>

      <div>
        <Link to={`/jobdetails/${id}`}>
          <button className="gradient">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleAppliedJob;

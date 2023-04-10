import React from 'react'
import {MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import Button from '../Button';
const FeaturedJobItem = ({ job }) => {
  const { companyImage, companyName, title, jobTypes, location, salary, id } =
    job;
  return (
    <div className="border border-blue-300/30 p-4 flex flex-col justify-between rounded-md shadow-sm">
      <div>
        <img className="mb-3" src={companyImage} alt="" />
        <h1 className="font-semibold text-lg">{title}</h1>
        <h2 className="text-sm mb-2 text-gray-600">{companyName}</h2>
        <div>
          {jobTypes?.map((jobType) => (
            <button className="border py-1 px-2 mr-2 text-[#7144eb] border-[#9873FF] font-semibold text-sm rounded-sm">
              {jobType}
            </button>
          ))}
        </div>

        <div className="my-3 font-medium text-gray-700 sm:flex  gap-4">
          <p className="flex items-center gap-1 text-xs">
            <MapPinIcon className="w-4 text-[#9873ff]" /> {location}
          </p>
          <p className="flex gap-1 text-xs mt-1">
            <CurrencyDollarIcon className="w-4 text-[#9873ff]" />
            {salary}
          </p>
        </div>
      </div>

      <Link to={`jobdetails/${id}`}>
        <div>
          <Button>View Details</Button>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedJobItem
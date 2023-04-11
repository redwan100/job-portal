import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utils/fakeDb";
import SingleAppliedJob from "./SingleAppliedJob";
import {ChevronDownIcon} from '@heroicons/react/24/outline'



const AppliedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [allJob, setAllJob] = useState([]);

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
  
    const savedCart = [];
    for (const id in storedCart) {
      const addedJob = jobs.find((product) => product.id == id);
      if (addedJob) {
        const quantity = storedCart[id];
        addedJob.quantity = quantity;
        savedCart.push(addedJob);
      }
    }
    setAllJob(savedCart);
  }, [jobs]);


  const handleFilteredItem = (e) =>{
    const target = e.target.value;
    const filtered = allJob.filter((job)=>job.jobTypes[0] === target)
    setAllJob(filtered)
  }

  return (
    <>
      {allJob.length ? (
        <div className="my-5">
          {/* =========Dropdown menu ========= */}
          <div className="relative w-max ml-auto my-4">
            <select
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600"
              onChange={handleFilteredItem}
            >
              <option className="text-center flex items-center">
                Filter By <ChevronDownIcon className="w-4" />
              </option>
              <option>Onsite</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="space-y-3">
            {allJob.map((job) => (
              <SingleAppliedJob key={job.id} {...job} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-4xl text-center">No Applied job here...</p>
      )}
    </>
  );
};

export default AppliedJob;

import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utils/fakeDb";
import SingleAppliedJob from "./SingleAppliedJob";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
      const addedProduct = jobs.find((product) => product.id == id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setAllJob(savedCart);
  }, [jobs]);

  const handleFilteredItem = (e) => {
    const target = e.target.value;
    const filtered = allJob.filter((job) => job.jobTypes[0] === target);
    setAllJob(filtered);
  };

  return (
    <div className="my-5">
      {/* =========Dropdown menu ========= */}
      <div className="relative w-max ml-auto my-4">
        <select
          className="w-full p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600"
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
  );
};

export default AppliedJob;

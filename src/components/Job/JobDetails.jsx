import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {MapPinIcon, PhoneIcon,EnvelopeIcon, CurrencyDollarIcon, CalendarDaysIcon} from '@heroicons/react/24/outline'
import { addToDb, getShoppingCart } from "../../utils/fakeDb";
import toast from 'react-hot-toast'



const JobDetails = () => {
  const dynamic = useParams();
  const [jobs, setJob] = useState([]);
const [cart, setCart] = useState([]);
  useEffect(() => {
    const handleData = async () => {
      const res = await fetch(`/featured.json`);
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

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = jobs.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, []);


     const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
        toast.success("successfully applied your job");
     };



  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold text-center my-7 mt-8">
        {jobs.title} Job Details
      </h1>

      <div className="w-full grid md:grid-cols-[2fr,_1fr] gap-10 md:gap-4 justify-center items-start">
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
                {jobs.jobResponsibility}
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

        <div>
          <div className="p-[1rem_1rem_2rem_2rem] bg-[#9873ff]/10 backdrop-blur-md rounded-md relative">
            <h1 className="text-lg font-semibold py-2 border-b">Job Details</h1>

            <div className="mt-3">
              <div className="flex items-center gap-1">
                <CurrencyDollarIcon className="w-5 text-[#9873ff]" />
                <p className="font-semibold">
                  Salary:{" "}
                  <span className="font-normal text-gray-700 text-sm">
                    {jobs.salary}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-1">
                <CalendarDaysIcon className="w-5 text-[#9873ff]" />
                <p className="font-semibold">
                  Job Title:{" "}
                  <span className="font-normal text-gray-700 text-sm">
                    {jobs.title}
                  </span>
                </p>
              </div>

              <h1 className="text-lg font-semibold border-b mt-5 mb-1 pb-1">
                Contact Information
              </h1>
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <PhoneIcon className="w-5 text-[#9873ff]" />
                  <p className="font-semibold">
                    Phone:{" "}
                    <span className="font-normal text-gray-700">
                      {jobs.phone}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <EnvelopeIcon className="w-5 text-[#9873ff]" />
                  <p className="font-semibold">
                    Email:{" "}
                    <span className="font-normal text-gray-700">
                      {jobs.email}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <MapPinIcon className="w-5 text-[#9873ff]" />
                  <p className="font-semibold">
                    Address:{" "}
                    <span className="font-normal text-gray-700">
                      {jobs.location}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <button
              onClick={() => handleAddToCart(jobs)}
              className="gradient w-full my-2"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utils/fakeDb";
import SingleAppliedJob from "./SingleAppliedJob";

const AppliedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [allJob, setAllJob] = useState([]);
  useEffect(() => {
    fetch("futured.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    console.log("stored", storedCart);
    const savedCart = [];
    for (const id in storedCart) {
      console.log("id", id);
      const addedProduct = jobs.find((product) => product.id == id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setAllJob(savedCart);
  }, [jobs]);

  console.log("all job", allJob);
  return (
    <div>
      <div className="space-y-3">
        {allJob.map((job) => (
          <SingleAppliedJob {...job}/>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;

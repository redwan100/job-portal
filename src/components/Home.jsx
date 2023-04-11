import Button from './Button';
import HeroImg from '../assets/All Images/P3OLGJ1 copy 1.png'
import JobCategoryList from './JobCategoryList';

import FeaturedJobItem from './Job/FeaturedJobItem';
import Title from './Title';
import { useEffect, useState } from 'react';




const title = `Featured Jobs`;
const desc = `Explore thousands of job opportunities with all the information you
        need. Its your future`;

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [isShow, setIsShow] = useState(false)

   useEffect(() => {
     const loadData = async () => {
       const res = await fetch(`../../../public/futured.json`);
       const data = await res.json();

       setJobs(data);
     };
     loadData();
   }, []);


  return (
    <div className="w-full mt-8 p-3">
      <div className="grid gap-3 sm:grid-cols-2 items-center justify-center">
        <div className="space-y-4 md:space-y-6 w-full max-w-sm md:max-w-md text-center mx-auto sm:text-left sm:mx-0 order-2 sm:order-none">
          <h1 className="text-4xl font-semibold md:text-6xl">
            One Step <br /> Closer To Your <br />
            <span className="text-[#9873FF]">Dream Job</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>

          <Button>Get Started</Button>
        </div>

        <div>
          <img
            className="object-cover order-[-1]"
            src={HeroImg}
            alt="hero image"
          />
        </div>
      </div>

      <section className="mt-10">
        <JobCategoryList />
      </section>

      <section className="my-12">
        <div className="my-5">
          <Title title={title} desc={desc} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {isShow
            ? jobs.map((job) => <FeaturedJobItem key={job.id} job={job} />)
            : jobs
                .slice(0, 4)
                .map((job) => <FeaturedJobItem key={job.id} job={job} />)}
        </div>

        {!isShow && (
          <button
            className="gradient mx-auto block my-8"
            onClick={() => setIsShow(true)}
          >
            Show All
          </button>
        )}
      </section>
    </div>
  );
}

export default Home
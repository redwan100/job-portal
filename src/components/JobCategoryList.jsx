import {
  ComputerDesktopIcon,
  LightBulbIcon,
  ChartPieIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import Title from "./Title";
import Job from "./Job/Job";

let jobList = [
  {
    id: 1,
    title: "Software Engineer",
    jobAvailable: "300 Jobs available",
    icon: ComputerDesktopIcon,
  },
  {
    id: 2,
    title: "Marketing Manager",
    jobAvailable: "350 Jobs available",
    icon: LightBulbIcon,
  },
  {
    id: 3,
    title: "Graphic Designer",
    jobAvailable: "100 Jobs available",
    icon: SwatchIcon,
  },
  {
    id: 4,
    title: "Sales Associate",
    jobAvailable: "200 Jobs available",
    icon: ChartPieIcon,
  },
];

const title = `Job Category List`;
const desc = `Explore thousands of job opportunities with all the information you
        need. Its your future`;
const JobCategoryList = () => {
  return (
    <>
      <Title title={title} desc={desc} />

      <div className="w-full block grid justify-center gap-6 grid-cols-[repeat(auto-fit,minmax(230px,_1fr))]">
        {
            jobList.map(job=><Job key={job.id} {...job}/>)
        }
      </div>
    </>
  );
};

export default JobCategoryList;

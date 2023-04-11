import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Assignment-1",
    mark: 60,
    time: "1-day",
    amt: 2400,
  },
  {
    name: "Assignment-2",
    mark: 60,
    time: "1-day",
    amt: 2210,
  },
  {
    name: "Assignment-3",
    mark: 60,
    time: "1-day",
    amt: 2290,
  },
  {
    name: "Assignment-4",
    mark: 60,
    time: "1-day",
    amt: 2000,
  },
  {
    name: "Assignment-5",
    mark: 58,
    time: "1-day",
    amt: 2181,
  },
  {
    name: "Assignment-6",
    mark: 60,
    time: "1-day",
    amt: 2500,
  },
  {
    name: "Assignment-7",
    mark: 60,
    time: "1-day",
    amt: 2100,
  },
];

const Statics = () => {
  return (
    <div width="100%"  className="grid place-content-center h-[calc(100vh-130px)]">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        
        
      </AreaChart>
    </div>
  );                                                   
};

export default Statics;

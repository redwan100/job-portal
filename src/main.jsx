import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppliedJob, Blog, Home, Statics } from './components';
import JobDetails from './components/Job/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statics",
        element: <Statics />,
      },
      {
        path: "jobs",
        element: <AppliedJob />,
      },
      {
        path: "jobdetails/:jobId",
        element: <JobDetails />,
      },
      
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)

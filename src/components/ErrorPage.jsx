import React from "react";
import { FaceFrownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="grid place-content-center h-screen">
      <div className="flex flex-col text-center space-y-3">
        <FaceFrownIcon className="w-52 text-rose-500 mx-auto" />
        <p className="text-7xl font-bold text-pink-600">{status}</p>
        <h1 className="text-4xl font-semibold text-gray-600">
          {error.message}
        </h1>
      </div>
      <Link
        className="mt-20 w-max bg-gray-100 py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-gray-200 duration-200 rounded-md flex items-center justify-between"
        to={"/"}
      >
        <ChevronLeftIcon className="w-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;

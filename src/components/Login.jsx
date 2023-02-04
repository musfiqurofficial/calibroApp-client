import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-10/12 mx-auto py-32">
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-900 dark:text-gray-100 mx-auto">
        <h1 className="text-3xl font-semibold">Calibro</h1>
        <p className="text-sm dark:text-gray-400">Administrator Login</p>
        <form className="space-y-4 ng-untouched ng-pristine ng-valid ">
          <div className="">
            <input
              id="userId"
              type="text"
              placeholder="User ID"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="mt-2 w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <Link
            to={"/dashboard"}
            type="submit"
            className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

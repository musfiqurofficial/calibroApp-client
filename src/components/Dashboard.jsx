import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center">
        <h4 className="text-xl font-semibold">DashBoard</h4>
      </div>
      <div className="lg:w-5/12 md:6/12 w-8/12 mt-5 mx-auto">
        <div className="text-center">
          <Link
            to={"/dashboard/manageforms"}
            className="px-5 py-3 bg-amber-500 hover:bg-amber-300 rounded-md font-semibold uppercase text-sm block"
          >
            Manage Forms
          </Link>
        </div>
        <div className="text-center mt-3">
          <Link
            to={"/dashboard/managetechnicians"}
            className="px-5 py-3 bg-amber-500 hover:bg-amber-300 rounded-md font-semibold uppercase text-sm block"
          >
            Manage Technicians
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

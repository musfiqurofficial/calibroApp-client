import React from "react";
import { Link } from "react-router-dom";

const ManageForms = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center">
        <h4 className="text-lg font-semibold">Manage Forms</h4>
      </div>
      <div className="lg:w-5/12 md:6/12 w-8/12 mt-5 mx-auto">
        <div className="mb-5">
          <label htmlFor="" className="mr-3 text-sm font-semibold">
            Sort by:{" "}
          </label>
          <select className="select select-bordered w-32 max-w-xs">
            <option disabled selected>
              Date
            </option>
            <option>Technician Name</option>
            <option>Department</option>
            <option>Company</option>
          </select>
        </div>
        <div className="text-center mt-10">
          <Link
            to={"/dashboard/manageforms/servicerequestform"}
            className="px-5 py-3 bg-amber-300 hover:bg-amber-500 rounded-md font-semibold uppercase text-sm block"
          >
            Service Request Form
          </Link>
        </div>
        <div className="text-center mt-3">
          <Link
            to={"/dashboard/managetechnicians"}
            className="px-5 py-3 bg-amber-300 hover:bg-amber-500 rounded-md font-semibold uppercase text-sm block"
          >
            Observation Sheet for Temperature
          </Link>
        </div>
        <div className="text-center mt-3">
          <Link
            to={"/dashboard/managetechnicians"}
            className="px-5 py-3 bg-amber-300 hover:bg-amber-500 rounded-md font-semibold uppercase text-sm block"
          >
            Obwervation Sheet for Prewsure / Vacuum Indleator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageForms;

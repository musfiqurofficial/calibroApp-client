import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-10/12 mx-auto text-center mt-12">
      <Link
        to={"/dashboard"}
        className="px-5 py-3 bg-lime-600 hover:bg-lime-800 text-sm text-white rounded-md font-semibold"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Footer;

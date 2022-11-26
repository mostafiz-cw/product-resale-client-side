import React from "react";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <div>
      <div className="flex items-center justify-cente container mx-auto">
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <Link to="/" className="flex-1 bg-red-300 p-4 cursor-pointer text-center font-bold">
            <p>BEDROOM</p>
          </Link>
          <Link className="flex-1 bg-yellow-300 p-4 cursor-pointer text-center font-bold">
            <p>Sofa Cum Bed</p>
          </Link>
          <Link className="flex-1 bg-indigo-300 p-4 cursor-pointer text-center font-bold">
            <p>Dining Set</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catagories;

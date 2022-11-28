import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catagories = () => {
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    fetch("https://a12-used-products-resalling-app-server-side.vercel.app/")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-cente container mx-auto">
        <div className="w-full flex flex-col sm:flex-row gap-4">
          {catagory?.map((catagories) => (
            <Link
              to={`/${catagories._id}`}
              className="flex-1 bg-purple-700
               p-4 cursor-pointer text-center font-bold uppercase text-white"
            >
              <p>{catagories.catagory}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagories;

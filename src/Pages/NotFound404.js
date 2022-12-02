import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <div className="container flex justify-center mt-16">
        <img
          src="https://i.ibb.co/12W5f54/404.png"
          alt="not found"
          className=""
        />
      </div>
      <Link className="no-underline" to="/">
        <button className="block mx-auto bg-purple-700 text-white font-bold px-3 py-2 mt-8 rounded">
          Go Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound404;

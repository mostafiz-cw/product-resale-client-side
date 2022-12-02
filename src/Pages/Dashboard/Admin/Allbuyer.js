import React, { useEffect, useState } from "react";
import Spinner from "../../../Components/Spinner";

const Allbuyer = () => {
  const role = "Buyer";
  const [allBuyer, setAllBuyer] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://a12-used-products-resalling-app-server-side.vercel.app/allbuyer/${role}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBuyer(data);
        setLoader(false);
      });
  }, [role]);
  return (
    <div>
      <p className="flex justify-center text-2xl font-semibold">
        All Buyer List
      </p>
      <div>{loader && <Spinner></Spinner>}</div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {allBuyer?.map((buyer, index) => (
              <tr key={buyer._id}>
                <td>{index + 1}</td>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>{buyer.role}</td>
                <td className="cursor-pointer">
                  <svg
                    style={{ color: "blue" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      fill="blue"
                    />{" "}
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      fill="blue"
                    />{" "}
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbuyer;

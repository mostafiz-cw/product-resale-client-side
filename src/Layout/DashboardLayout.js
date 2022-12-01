import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile container mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            { isAdmin === "Admin" && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )}
            { isAdmin === "Buyer" && (
              <>
                <li>
                  <Link to="/dashboard/myorder">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/wishlist">My Wishlist</Link>
                </li>
              </>
            )}
            { isAdmin === "Seller" && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybuyers">My buyers</Link>
                </li>
              </>
            )}

            {/* <li>
              <Link to="/dashboard/myorder">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/wishlist">My Wishlist</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

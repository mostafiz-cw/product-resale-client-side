import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import CatagoryCard from "../Pages/CatagoryCard";
import Allbuyer from "../Pages/Dashboard/Admin/Allbuyer";
import AllSeller from "../Pages/Dashboard/Admin/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import Wishlist from "../Pages/Dashboard/Mywishlist/Wishlist";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/:id",
        element: <PrivateRoute><CatagoryCard></CatagoryCard></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://a12-used-products-resalling-app-server-side.vercel.app/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myorder",
        element: <MyOrder></MyOrder>
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>
      },
      {
        path: "/dashboard/mybuyers",
        element: <MyBuyers></MyBuyers>
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSeller></AllSeller>
      },
      {
        path: "/dashboard/allbuyers",
        element: <Allbuyer></Allbuyer>
      }
    ],
  },
]);

export default router;

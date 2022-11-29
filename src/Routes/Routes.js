import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CatagoryCard from "../Pages/CatagoryCard";
import Dashboard from "../Pages/Dashboard";
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
        element: <CatagoryCard></CatagoryCard>,
        loader: ({ params }) => fetch(`https://a12-used-products-resalling-app-server-side.vercel.app/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ],
  },
]);

export default router;

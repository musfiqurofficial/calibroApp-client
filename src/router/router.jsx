import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import ManageForms from "../components/ManageForms";
import ManageTech from "../components/ManageTech";
import Register from "../components/Register";
import SRFFrom from "../components/SRFFrom";
import LoginLayout from "../root/LoginLayout";
import Root from "../root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/manageforms",
        element: <ManageForms />,
      },
      {
        path: "/dashboard/managetechnicians",
        element: <ManageTech />,
      },
      {
        path: "/dashboard/manageforms/servicerequestform",
        element: <SRFFrom />,
      },
    ],
  },
]);

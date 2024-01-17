import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import RecyclingCenters from "../Home/RecyclingCenters/RecyclingCenters";
import CreateRecyclingCenters from "../Home/RecyclingCenters/CreateRecyclingCenters/CreateRecyclingCenters";
import RecyclingTracking from "../Home/RecyclingCenters/RecyclingTracking/RecyclingTracking";

export const nav = [
  {
    path: "/home",
    name: "Home",
    element: <Home />,
    isPrivate: true,
  },
  {
    path: "/",
    name: "Register",
    element: <Register />,
    isPrivate: false,
  },
  {
    path: "/login",
    name: "Login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/RecyclingCenters",
    name: "RecyclingCenters",
    element: <RecyclingCenters />,
    isPrivate: true,
  },
  {
    path: "/CreateRecyclingCenters",
    name: "CreateRecyclingCenters",
    element: <CreateRecyclingCenters />,
    isPrivate: true,
  },
  {
    path: "/RecyclingTracking",
    name: "RecyclingTracking",
    element: <RecyclingTracking />,
    isPrivate: true,
  },
];

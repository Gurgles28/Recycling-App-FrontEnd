import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import RecyclingCenters from "./Home/RecyclingCenters/RecyclingCenters";

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
    name: "Home",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/RecyclingCenters",
    name: "Home",
    element: <RecyclingCenters />,
    isPrivate: true,
  },
];

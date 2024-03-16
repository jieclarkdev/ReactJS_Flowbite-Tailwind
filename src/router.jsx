import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Application from "./pages/Application";
import Profile from "./pages/Application/Profile";
import Dashboard from "./pages/Application/Dashboard";
import Messages from "./pages/Application/Messages";
import Users from "./pages/Application/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/reg",
    element: <Signup />,
  },
  {
    path: "/app",
    element: <Application />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "msg/",
        element: <Messages />,
      },
      {
        path: "users/",
        element: <Users />,
      },
      {
        path: "profile/",
        element: <Profile />
      },
    ],
  },
]);

export default router
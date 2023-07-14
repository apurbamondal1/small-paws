import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../page/nonShaierd/Home/Home";
import SignUp from "../SignUp/SignUP";
import Login from "../Login/Login";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/SignUP", element: <SignUp /> },
      { path: "/Login", element: <Login /> },
      
    ],
  },
]);
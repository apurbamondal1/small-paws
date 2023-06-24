import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../page/nonShaierd/Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      
    ],
  },
]);
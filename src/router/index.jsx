import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainSection from "../components/mainSection/MainSection";
import EachPage from "../components/eachPage/EachPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <MainSection />,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
    {
      path: "/product/:id",
      element: <EachPage />,
    },
    ]
  },

]);

export default router
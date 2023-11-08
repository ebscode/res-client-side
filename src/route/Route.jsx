import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../page/Home";
import Error from "../components/Error/Error";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Allfood from "../components/allfood/Allfood";
import Fooddetails from "../components/allfood/Fooddetails";
import Privateroute from "./Privateroute";
import Foodpurchase from "../components/allfood/Foodpurchase";
import Contact from "../page/contact/Contact";
import About from "../page/about/About";
import Blog from "../page/blog/Blog";
import Addproduct from "../page/addproduct/Addproduct";
import Myaddedproduct from "../page/myaddproduct/Myaddedproduct";
import Updateproduct from "../page/myaddproduct/Updateproduct";
import Myorder from "../page/myorder/Myorder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-side-nine-ashen.vercel.app/foods"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allfood",
        element: <Allfood></Allfood>,
        loader: () =>
          fetch("https://server-side-nine-ashen.vercel.app/foodcount"),
      },
      {
        path: "/details/:id",
        element: (
          <Privateroute>
            <Fooddetails></Fooddetails>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-nine-ashen.vercel.app/singlefood/${params.id}`
          ),
      },
      {
        path: "/purchase/:id",
        element: <Foodpurchase></Foodpurchase>,
        loader: ({ params }) =>
          fetch(
            `https://server-side-nine-ashen.vercel.app/singlefood/${params.id}`
          ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addproduct",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/myaddproduct",
        element: <Myaddedproduct></Myaddedproduct>,
        loader: () => fetch("https://server-side-nine-ashen.vercel.app/foods"),
      },
      {
        path: "/update/:id",
        element: <Updateproduct></Updateproduct>,
        loader: ({ params }) =>
          fetch(
            `https://server-side-nine-ashen.vercel.app/update/${params.id}`
          ),
      },
      {
        path: "/myorder",
        element: <Myorder></Myorder>,
        // loader:()=>fetch('https://server-side-nine-ashen.vercel.app/purchase',{credentials:'include'})
      },
    ],
  },
]);
export default router;

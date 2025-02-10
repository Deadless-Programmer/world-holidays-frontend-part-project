import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import Packages from "../pages/Packages/Packages";
import Services from "../pages/Services/Services";
import PackageDetails from "../components/Packages/PackagesGallery/PackageDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/packages",
        element: <Packages/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/packages/packageDetails",
        element: <PackageDetails/>
      },
    ],
  },
]);

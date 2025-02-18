import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import Packages from "../pages/Packages/Packages";
import Services from "../pages/Services/Services";
import PackageDetails from "../components/Packages/PackagesGallery/PackageDetails";
import PopularDestinationDetails from "../components/home/PopularDestination/PopularDestinationDetails";
import TicketDetails from "../components/TicketDetails/TicketDetails";
import BookOnRooutes from "../components/TicketDetails/BookOnRooutes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
      {
        path: "/popular-destination-details",
        element: <PopularDestinationDetails/>
      },
      {
        path: "/ticket-details",
        element: <TicketDetails/>
      },
      {
        path: "/book-on-routes",
        element: <BookOnRooutes/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/sign-up",
        element: <SignUp/>
      },
    ],
  },
]);

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

import SignInUpForm from "../components/SignInUpForm"
import DomesticPackageDetails from "../components/Packages/PackagesGallery/DomesticPackageDetails";
import NextTourDetails from "../components/home/NextTour/NextTourDetails";

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

      {path:'/next_tour_details/:id',
        element:<NextTourDetails/>,
        loader:()=>fetch('/NextTour.json')
      },
      {path:'/domesticePackageDetails/:id',
        element:<DomesticPackageDetails/>,
        loader:()=>fetch('/DomesticePackages.json')
      },
      {
        path: "/packageDetails/:id",
        element: <PackageDetails />,
        loader : ()=> fetch('/InternationalPackages.json')
        
        // loader: async ({ params }) => {
        //   try {
        //     const response = await fetch(`http://localhost:5000/packageDetails/${params.id}`);
        //     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        //     return response.json();
        //   } catch (error) {
        //     throw new Error("Failed to load package: " + error.message);
        //   }
        // }
      
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/popular-destination-details/:id",
        element: <PopularDestinationDetails/>,
        loader: ()=>fetch('/popularDestination.json')
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
        path: "/signInUpForm",
        element: <SignInUpForm/>
      },
      // {
      //   path: "/sign-up",
      //   element: <SignUp/>
      // },
    ],
  },
]);

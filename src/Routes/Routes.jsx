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
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../pages/dashboard_pages/Dashboard/Dashboard";
import MyCart from "../pages/dashboard_pages/MyCart/MyCart";
import MyIntPackges from "../pages/dashboard_pages/Dashboard/DashboardPages/MyIntPackges";
import MyDomPackages from "../pages/dashboard_pages/Dashboard/DashboardPages/MyDomPackages";
import MyNextTour from "../pages/dashboard_pages/Dashboard/DashboardPages/MyNextTour";
import MyPopularDestination from "../pages/dashboard_pages/Dashboard/DashboardPages/MyPopularDestination";
import MyDomTicket from "../pages/dashboard_pages/Dashboard/DashboardPages/MyDomTicket";
import MyIntTicket from "../pages/dashboard_pages/Dashboard/DashboardPages/MyIntTicket";
import MyOtherServices from "../pages/dashboard_pages/Dashboard/DashboardPages/MyOtherServices";
import MyTicketCart from "../pages/dashboard_pages/Dashboard/DashboardPages/MyTicketCart";
import AllUsers from "../pages/dashboard_pages/Dashboard/DashboardPages/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDomPackage from "../pages/dashboard_pages/Dashboard/AddAllApi/AddDomPackage";
import AddIntPackage from "../pages/dashboard_pages/Dashboard/AddAllApi/AddIntPackage";
import AddNextTour from "../pages/dashboard_pages/Dashboard/AddAllApi/AddNextTour";
import AddMosPopDes from "../pages/dashboard_pages/Dashboard/AddAllApi/AddMosPopDes";
import ShowDomPackages from "../pages/dashboard_pages/Dashboard/ShowAllData/ShowDomPackages";
import UpdateDomPackage from "../pages/dashboard_pages/Dashboard/AddAllApi/UpdateDomPackage";
import ShowIntPackages from "../pages/dashboard_pages/Dashboard/ShowAllData/ShowIntPackages";
import UpdateIntPackage from "../pages/dashboard_pages/Dashboard/AddAllApi/UpdateIntPackage";

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
        // loader:()=>fetch('/NextTour.json')
        loader : ({params})=>fetch(`http://localhost:5000/next_tour/${params.id}`)
      },
      {path:'/domesticePackageDetails/:id',
        element:<DomesticPackageDetails/>,
        // loader:()=>fetch('/DomesticePackages.json')

        loader : ({params})=>fetch(`http://localhost:5000/domestic_packages/${params.id}`)
      },
      {
        path: "/packageDetails/:id",
        element: <PackageDetails />,
        // loader : ({params})=> fetch(`http://localhost:5000/interNational_packages${params.id}`)
        
        loader: async ({ params }) => {
          try {
            const response = await fetch(`http://localhost:5000/interNational_packages/${params.id}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
          } catch (error) {
            throw new Error("Failed to load package: " + error.message);
          }
         }
      
      },
      {
        path: "/services",
        element: <PrivetRoute><Services/></PrivetRoute>
      },
      {
        path: "/popular-destination-details/:id",
        element: <PopularDestinationDetails/>,
        loader: ({params})=>fetch(`http://localhost:5000/popular_destination/${params.id}`)
      },
      {
        path: "/ticket-details/:id",
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
  {
    path: "/dashboard",
    element: <PrivetRoute><Dashboard/></PrivetRoute>,
    children: [

      {
     path:"all-users",
     element:<AdminRoute> <AllUsers/></AdminRoute>
      },
      {
        path:"add-dom-packages",
        element:<AddDomPackage/>

      },
      {
        path:"/dashboard/update-dom-packages/:id",
        element:<UpdateDomPackage/>,
        // loader :({params})=> fetch(`http://localhost:5000/show-all-domestic-packages/${params.id}`)

      },
      {
        path:"show-all-dom-packages",
        element:<ShowDomPackages/>

      },
      {
        path:"add-int-packages",
        element:<AddIntPackage/>

      },
      {
        path:"/dashboard/update-int-packages/:id",
        element:<UpdateIntPackage/>
        // loader :({params})=> fetch(`http://localhost:5000/show-all-domestic-packages/${params.id}`)

      },
      {
        path:"show-all-int-packages",
        element:<ShowIntPackages/>

      },
      {
        path:"add-next-tour",
        element:<AddNextTour/>

      },
      {
        path:"add-most-popular-destination",
        element:<AddMosPopDes/>

      },
      {
        path: "my-cart",
        element: <MyCart/>,
      },
      {
        path: "int-packages",
        element: <MyIntPackges/>
      },
      {
        path: "dom-packages",
        element: <MyDomPackages/>
      },
      {
        path: "next-tour",
        element: <MyNextTour/>
      },
      {
        path: "popular-destination",
        element: <MyPopularDestination/>
      },
      {
        path: "my-ticket-cart",
        element: <MyTicketCart/>
      },
     
      {
        path: "others-service",
        element: <MyOtherServices/>
      },
      
    
    ],
  },
]);

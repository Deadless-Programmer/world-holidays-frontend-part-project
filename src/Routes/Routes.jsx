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
import ShowNextTour from "../pages/dashboard_pages/Dashboard/ShowAllData/ShowNextTour";
import UpdateNextTour from "../pages/dashboard_pages/Dashboard/AddAllApi/UpdateNextTour";
import ShowMostPopularDes from "../pages/dashboard_pages/Dashboard/ShowAllData/ShowMostPopularDes";
import UpdateMostPopDes from "../pages/dashboard_pages/Dashboard/AddAllApi/UpdateMostPopDes";
import ShowIntCart from "../pages/dashboard_pages/Dashboard/ShowUserCart/ShowIntCart";
import ShowDomPacCart from "../pages/dashboard_pages/Dashboard/ShowUserCart/ShowDomPacCart";
import ShowNextTourCart from "../pages/dashboard_pages/Dashboard/ShowUserCart/ShowNextTourCart";
import ShowPopularDesCart from "../pages/dashboard_pages/Dashboard/ShowUserCart/ShowPopularDesCart";
import ShowTicketCart from "../pages/dashboard_pages/Dashboard/ShowUserCart/ShowTicketCart";
import VisaProcessing from "../components/VisaProcessing/VisaProcessing";
import VisaProcessingDetails from "../components/VisaProcessing/VisaProcessingDetails";
import MyVisa from "../pages/dashboard_pages/Dashboard/DashboardPages/MyVisa";
import ShowVisaCart from "../pages/dashboard_pages/Dashboard/ShowUserCart/ShowVisaCart";
import AddVisaRate from "../pages/dashboard_pages/Dashboard/AddAllApi/AddVisaRate";
import ShowVisaRate from "../pages/dashboard_pages/Dashboard/AddAllApi/ShowVisaRate";
import UpdateVisaRate from "../pages/dashboard_pages/Dashboard/AddAllApi/UpdateVisaRate";
import AddTeamMembers from "../pages/dashboard_pages/Dashboard/AddAllApi/AddTeamMembers";
import ShowTeamMembers from "../pages/dashboard_pages/Dashboard/ShowUserCart/ShowTeamMembers";
import UpdateteamMembers from "../pages/dashboard_pages/Dashboard/AddAllApi/UpdateteamMembers";
import Review from "../pages/dashboard_pages/Dashboard/Review/Review";
import ShowReview from "../pages/dashboard_pages/Dashboard/Review/ShowReview";
import TermsAndConditions from "../components/footerPages/TermsAndConditions";
import PrivacyPolicy from "../components/footerPages/privacyPolicy";
import CookiePolicy from "../components/footerPages/cookiePolicy";
import Blog from "../components/footerPages/Blog";
import EasyEMI from "../components/footerPages/easyEMI";
import PaymentMethods from "../components/footerPages/paymentMethods";
import FaqsWorldHolidays from "../components/footerPages/FaqsWorldHolidays";
import DashboardErr from "../components/errPage/DashboardErr";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<DashboardErr/>,
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
        path: "/services/visa-processing",
        element: <VisaProcessing/>
      },
      {
        path: "/services/visa-processing/:id",
        element: <VisaProcessingDetails/>,
        loader : ({params})=>fetch(`http://localhost:5000/visa-processing-fee/${params.id}`)
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



      // footer section routes



      {
        path: '/term-&-condition',
        element: <TermsAndConditions/>
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy/>
      },
      
      {
        path: '/cookie-policy',
        element:<CookiePolicy/>
      }
      ,
      
      {
        path: '/blog',
        element:<Blog/>
      },
      {
        path: '/easy-emi',
        element:<EasyEMI/>
      }
      ,
      {
        path: '/payment-method',
        element:<PaymentMethods/>
      }
      ,
      {
        path: '/faqs-World-Holidays',
        element:<FaqsWorldHolidays/>
      }
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
        path:"/dashboard/update-next-tour/:id",
        element:<UpdateNextTour/>
      

      },
      {
        path:"show-next-tour",
        element:<ShowNextTour/>

      },
      {
        path:"add-most-popular-destination",
        element:<AddMosPopDes/>

      },
      {
        path:"show-most-popular-destination",
        element:<ShowMostPopularDes/>

      },

      {
        path:"/dashboard/show-most-popular-destination/:id",
        element:<UpdateMostPopDes/>
      

      },

      {
        path:"add-visa-rate",
        element:<AddVisaRate/>

      },
      {
        path:"show-visa-rate",
        element:<ShowVisaRate/>

      },

      {
        path:"/dashboard/show-visa-rate/:id",
        element:<UpdateVisaRate/>
      

      },
      
      {
        path:"add-team-member",
        element:<AddTeamMembers/>
        
      },
      
      {
        path:"show-team-member",
        element:<ShowTeamMembers/>
        
      },
      {
        path:"/dashboard/update-team-members/:id",
        element:<UpdateteamMembers/>
      

      },



      // show all order cart for admin

      {
        path: "int-package-order-cart",
        element: <ShowIntCart></ShowIntCart>
      },
      {
        path: "domestice-package-order-cart",
        element: <ShowDomPacCart></ShowDomPacCart>
      },
      {
        path: "next-tour-order-cart",
        element: <ShowNextTourCart></ShowNextTourCart>
      },
      {
        path: "popular-destination-order-cart",
        element: <ShowPopularDesCart></ShowPopularDesCart>
      },
      {
        path: "ticket-order-cart",
        element: <ShowTicketCart></ShowTicketCart>
      },
      {
        path: "visa-order-cart",
        element: <ShowVisaCart/>
      },






// user carts routes
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
        path: "my-visa-cart",
        element: <MyVisa/>
      },
      {
        path: "my-review",
        element: <Review/>
      },
      {
        path: "show-review",
        element: <ShowReview/>
      },
     
      {
        path: "others-service",
        element: <MyOtherServices/>
      },
      
    
    ],
  },
]);

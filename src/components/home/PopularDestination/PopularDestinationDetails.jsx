import React, { useState } from "react";
import PageHeader from "../../PageHeader/PageHeader";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import {
  MdAddLocationAlt,
  MdEmojiTransportation,
  MdLocationOn,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LiaHotelSolid, LiaThumbtackSolid } from "react-icons/lia";
import {
  IoCarSportSharp,
  IoFastFood,
  IoReloadCircleOutline,
} from "react-icons/io5";
import { GoCheckCircle } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";
import RelatedDestination from "./RelatedDestination";


import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useDomPackageCart from "../../../hooks/useDomPackageCart";
import Swal from "sweetalert2";
import ScrollToTop from "../../utils/ScrollToTop";

const PopularDestinationDetails = () => {
 const [date, setDate] = useState(null);

 const { user } = useAuth();
 const axiosSecure =useAxiosSecure();
 const [,refetch]=useDomPackageCart();
 // const { id } = useParams();
 const navigate = useNavigate();
 const location_path = useLocation();
const popularDesData = useLoaderData();
// console.log(popularDesData)

// const popularDes = popularDesData.find(item=>item._id===id)
// console.log(relatedDes)

const {image, country, name,overview,_id}=popularDesData;


const handleAddToCart = (e) => {
    e.preventDefault();

    const form = e.target;
    const contact = form?.contact?.value;
    const userLocation = form?.userLocation?.value;
    const totalGuest = form?.noOFGuest?.value;
    const selectedDate = date;

   

    if (user && user.email) {
      const cartItem = {
        packagesId :_id,
        contact,
        userLocation,
        totalGuest,
        email: user.email,
        name: user?.displayName,
        date: selectedDate,
        popularDesData,

       
      }; 
      console.log(cartItem);
      axiosSecure.post('/popular_des_cart',cartItem ).then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your destination has been Added",
          showConfirmButton: false,
          timer: 1500
        });
      }

      refetch();
     })
    }

    else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to book the package",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signInUpForm", { state: { from: location_path } });
        }
      });
    }
  };

  return (
    <div>
      <ScrollToTop/>
      <PageHeader
        heading={"Popular Destination"}
        paragraph={"Explore most popular destinations detail"}
        bgImage={
          "https://images.unsplash.com/photo-1605200723310-5df264c13e22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <div className="container max-w-7xl mx-auto md:grid grid-cols-12 gap-16 mt-8 p-6">
        <div className="col-span-8">
          <img
            src={image}
            alt=""
          />
          <div className="flex justify-between mt-5">
            <h1 className="font-playfair text-3xl font-semibold items-end">
              {name}
            </h1>
          </div>

          <div>
            <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
              {" "}
              <MdOutlineLibraryBooks /> {overview.title}
            </h1>
            <p className="mt-2 font-nunito">
              {overview.description}
            </p>
          
          </div>

          <div>
            <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
              {" "}
              <IoReloadCircleOutline  /> Realated Destination
            </h1>
            <RelatedDestination id={_id} />
          </div>
        </div>
        <div className="col-span-4  bg-zinc-50 h-[550px]">
          <h1 className="text-2xl text-center mt-5 pt-5 md:pt-0 font-playfair">
            Tour Booking
          </h1>
        <form onSubmit={ handleAddToCart} action="">
                    <div class="flex flex-col items-center font-nunito justify-center ">
                                  <input
                                    defaultValue={user?.displayName}
                                    type="text"
                                    placeholder="Your Name"
                                    className=" p-3 outline-none w-72 mt-8 "
                                  />
                                  <input
                                    type="text"
                                    name="contact"
                                    placeholder="Your phone"
                                    className=" p-3 outline-none w-72 mt-4 "
                                  />
                                  <input
                                    type="email"
                                    defaultValue={user?.email}
                                    placeholder="Your email"
                                    className=" p-3 outline-none w-72 mt-4 "
                                  />
                                  <input
                                    type="text"
                                    name="userLocation"
                                    placeholder="Your location"
                                    className=" p-3 outline-none w-72 mt-4 "
                                  />
                                  <input
                                    type="text"
                                    name="noOFGuest"
                                    placeholder="Guest No. -input adult & child"
                                    className=" p-3 outline-none w-72 mt-4 "
                                  />
                    
                                  <div className="">
                                    <Flatpickr
                                     
                                      value={date}
                                      onChange={(selectedDates) => setDate(selectedDates[0])}
                                      options={{
                                        dateFormat: "Y-m-d",
                    
                                        enableTime: false, // Change to true if you want time
                                        minDate: "today", // Restrict past dates
                                      }}
                                      placeholder="Select a date"
                                      className="p-3 outline-none w-72 mt-4"
                                    />
                                  </div>
                    
                                  <button
                                   type="submit"
                                    className="border px-3 py-2 w-72 text-center bg-orange-500  mt-5 hover:text-white font-nunito  flex justify-between items-center"
                                  >
                                    Book <IoIosArrowRoundForward className="text-2xl" />{" "}
                                  </button>
                                </div>
                  </form>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationDetails;

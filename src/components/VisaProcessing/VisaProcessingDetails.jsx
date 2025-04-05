import { AiOutlineCloseCircle } from "react-icons/ai";

import { GoCheckCircle } from "react-icons/go";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import {
  IoIosArrowRoundForward,
  
} from "react-icons/io";

import {
 
  LiaThumbtackSolid,
} from "react-icons/lia";
import {
  MdAddLocationAlt,
 
  MdOutlineLibraryBooks,
} from "react-icons/md";



import {
  useLoaderData,
  useLocation,
  useNavigate,
  
} from "react-router-dom";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";


import Swal from "sweetalert2";


// import useIntPackageCart from "../../../hooks/useIntPackageCart";
import PageHeader from "../PageHeader/PageHeader";
import useAuth from "../../hooks/useAuth";

import useVisaprocessingCart from "../../hooks/useVisaprocessingCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const customStyles = {
  itemShapes: Star,
  activeFillColor: "#FFA500", // Gold color for active stars
  inactiveFillColor: "#D3D3D3", // Light gray for inactive stars
};
const VisaProcessingDetails = () => {
  const [date, setDate] = useState(null);
  const { user } = useAuth();
  const axiosSecure =useAxiosSecure();
  const [,refetch]=useVisaprocessingCart();
  // const { id } = useParams();
  const navigate = useNavigate();
  const location_path = useLocation();
  const countryData = useLoaderData();


  // const package_Data = packageData.find(
  //   (package_data) => package_data._id === id
  // );
  // console.log("Loaded data:", packageData);
  const {
    src,
    name,
    overview,
    visaFee,
    Requirment,
    country_location_images,
    _id
  } = countryData;

  const handleAddToCart = (e) => {
    e.preventDefault();

    const form = e.target;
    const contact = form?.contact?.value;
    const userLocation = form?.userLocation?.value;
  
    const selectedDate = date;

   

    if (user && user.email) {
      const cartItem = {
        countryId :_id,
        contact,
        userLocation,
        
        email: user.email,
        name: user?.displayName,
        date: selectedDate,
        countryData

       
      }; 
      console.log(cartItem);
      axiosSecure.post('/visa-processing-fee-cart',cartItem ).then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Order has been Added",
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
    <section>
      <PageHeader
        heading={"Visa-Details"}
        paragraph={"Discover all of infomation for processing visa"}
        bgImage={
          "https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <div></div>
      <div className="container max-w-7xl mx-auto md:grid grid-cols-12 gap-16 mt-8 p-6">
        {/* left side */}
        <div className="col-span-8">
          <img className="w-full" src={src} alt="" />
          <div className="flex justify-between mt-5">
            <h1 className="font-playfair text-3xl font-semibold items-end">
              {name}
            </h1>
            <h3 className="font-semibold font-nunito">
              From{" "}
              <span className="font-semibold text-2xl">${visaFee}</span>{" "}
              per Head
            </h3>
          </div>
        

         

          <div>
            <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
              {" "}
              <MdOutlineLibraryBooks /> Overview
            </h1>
            <p className="mt-2 font-nunito">{overview}</p>
          </div>

          <div>
            <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
              {" "}
              <LiaThumbtackSolid /> Requirments for getting visa
            </h1>
            <div className="mt-5 md:grid grid-cols-2 ">
              {Requirment?.map((data, indx) => (
                <p
                  key={indx}
                 
                  className="flex items-center gap-3 font-nunito"
                >
                  {" "}
                  <GoCheckCircle className="text-orange-500" /> {data}
                </p>
              ))}
            </div>
          </div>
        
          <div>
            <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
              {" "}
              <MdAddLocationAlt /> Most Visited Places in this country
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-5 flex-wrap">
              {country_location_images?.map((image, idx) => (
                <img
                  key={idx} // Corrected `key`
                  className="w-[320px] transition duration-700 hover:scale-105 h-48"
                  src={image}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="col-span-4  bg-zinc-50 h-[480px]">
          <h1 className="text-2xl text-center mt-5 pt-5 md:pt-0 font-playfair">
            Input your info
          </h1>
          <form  onSubmit={ handleAddToCart} action="">
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
    </section>
  );
};

export default VisaProcessingDetails;

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import {
  IoIosArrowRoundForward,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { IoCarSportSharp, IoFastFood } from "react-icons/io5";
import {
  LiaArrowAltCircleRightSolid,
  LiaHotelSolid,
  LiaThumbtackSolid,
} from "react-icons/lia";
import {
  MdAddLocationAlt,
  MdEmojiTransportation,
  MdLocationOn,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import PageHeader from "../../PageHeader/PageHeader";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const customStyles = {
  itemShapes: Star,
  activeFillColor: "#FFA500", // Gold color for active stars
  inactiveFillColor: "#D3D3D3", // Light gray for inactive stars
};
const NextTourDetails = () => {
  const [date, setDate] = useState(null);

  // const { id } = useParams();
  const tourData = useLoaderData();

  // const _Data = tourData.find(
  //   (next_data) => next_data._id === id
  // );
  // console.log("Loaded data:", id, _Data);
  const {
    destination,
    date_range,
    duration,
    price,
    location,
    included_services,
    included,
    image,
    excluded,
    rating,
    tour_location_images,
    overview,
  } = tourData;
  return (
    <section>
      <PageHeader
        heading={"Our Next Tour Details"}
        paragraph={"Discover all of infomation for this tour"}
        bgImage={
            image
        }
      />
      <div></div>
      <div className="container max-w-7xl mx-auto md:grid grid-cols-12 gap-16 mt-8 p-6">
        {/* left side */}
        <div className="col-span-8">
          <img src={image} alt="" />
          <div className="flex justify-between mt-5">
            <h1 className="font-playfair text-3xl font-semibold items-end">
              {destination}
            </h1>
            <h3 className="font-semibold font-nunito">
              From{" "}
              <span className="font-semibold text-2xl">${price.amount}</span>{" "}
              per adult
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <div className="mt-5 ">
              <div>
                <div className="md:flex  items-center gap-10">
                  <Rating
                    value={rating}
                    readOnly
                    halfFillMode="svg"
                    style={{ maxWidth: 150 }}
                    itemStyles={customStyles}
                  />
                  <h1 className="flex items-center gap-1  mt-2 md:mt-0">
                    {" "}
                    <HiMiniCalendarDateRange /> {date_range}
                  </h1>
                </div>
                <div className="md:flex justify-around gap-10 ">
                  <h1 className="flex items-center gap-2  font-nunito mt-2">
                    <SlCalender /> {duration}
                  </h1>
                  <h1 className="flex items-center gap-2 font-nunito mt-2">
                    <MdLocationOn className="text-orange-500 text-xl " />{" "}
                   {location}
                  </h1>
                </div>
              </div>
            </div>
            {/* <button className="border px-3 py-2 text-center bg-orange-500 w-28 mt-5 hover:text-white font-nunito  flex justify-between items-center">
              Book <IoIosArrowRoundForward className="text-2xl" />{" "}
            </button> */}
          </div>

          <div className="md:flex justify-start items-center gap-10 mt-8">
            <h1 className="flex md:justify-around items-center gap-1 text-xl font-nunito ">
              <MdEmojiTransportation /> Transport
            </h1>
            <h1 className="flex md:justify-around items-center gap-1 text-xl font-nunito mt-2 md:mt-0">
              <LiaHotelSolid /> Hotel
            </h1>
            <h1 className="flex md:justify-around items-center gap-1 text-xl font-nunito  mt-2 md:mt-0">
              <IoFastFood /> Breakfast
            </h1>
            <h1 className="flex md:justify-around items-center gap-1 text-xl font-nunito mt-2 md:mt-0">
              <IoCarSportSharp /> Sightseeing
            </h1>
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
              <LiaThumbtackSolid /> Included
            </h1>
            <div className="mt-5 md:grid grid-cols-2 ">
              {included.map((data, indx) => (
                <p
                  key={data.indx}
                  da
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
              <LiaThumbtackSolid />
              Excluded
            </h1>
            <div className="mt-5 md:grid grid-cols-2 ">
              {excluded.map((data, indx) => (
                <p
                  key={data.indx}
                  da
                  className="flex items-center gap-3 font-nunito"
                >
                  {" "}
                  <AiOutlineCloseCircle className="text-orange-500" /> {data}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
              {" "}
              <MdAddLocationAlt /> Tour Location
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-5 flex-wrap">
              {tour_location_images.map((image, idx) => (
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
        <div className="col-span-4  bg-zinc-50 h-[550px]">
          <h1 className="text-2xl text-center mt-5 pt-5 md:pt-0 font-playfair">
            Input your info
          </h1>
          <form action="">
            <div class="flex flex-col items-center font-nunito justify-center ">
              <input
                type="text"
                placeholder="Your Name"
                className=" p-3 outline-none w-72 mt-8 "
              />
              <input
                type="text"
                placeholder="Your phone"
                className=" p-3 outline-none w-72 mt-4 "
              />
              <input
                type="email"
                placeholder="Your email"
                className=" p-3 outline-none w-72 mt-4 "
              />
              <input
                type="text"
                placeholder="Your location"
                className=" p-3 outline-none w-72 mt-4 "
              />
              <input
                type="text"
                placeholder="Guest No. -input adult & child"
                className=" p-3 outline-none w-72 mt-4 "
              />

              <div className="">
                <Flatpickr
                  value={date}
                  onChange={(selectedDates) => setDate(selectedDates)}
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

export default NextTourDetails;

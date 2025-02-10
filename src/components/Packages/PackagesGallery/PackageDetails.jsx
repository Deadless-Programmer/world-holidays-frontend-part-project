import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowRoundForward, IoIosCloseCircleOutline } from "react-icons/io";
import { IoCarSportSharp, IoFastFood } from "react-icons/io5";
import { LiaArrowAltCircleRightSolid, LiaHotelSolid, LiaThumbtackSolid } from "react-icons/lia";
import {
    MdAddLocationAlt,
  MdEmojiTransportation,
  MdLocationOn,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const PackageDetails = () => {
  return (
    <div className="container max-w-7xl mx-auto grid grid-cols-12 gap-16 p-6">
      <div className="col-span-7">
        <img
          src="https://images.unsplash.com/photo-1628438273202-a26e785d044f?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex justify-between mt-5">
          <h1 className="font-playfair text-3xl font-semibold items-end">
            Fulhadoo
          </h1>
          <h3 className="font-semibold font-nunito">
            From <span className="font-semibold text-2xl">$240</span> per adult
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <div className="mt-5 ">
            <div>
              {" "}
              <h1 className="flex items-center gap-1 text-xl">
                {" "}
                5 <FaRegStar className="text-orange-500 " />
              </h1>
              <div className="flex justify-around gap-10">
                <h1 className="flex items-center gap-2 text-xl font-nunito mt-2">
                  {" "}
                  <SlCalender /> 4 Day / 3 Night{" "}
                </h1>
                <h1 className="flex items-center gap-2 text-xl font-nunito mt-2">
                  {" "}
                  <MdLocationOn className="text-orange-500 " /> Maldives
                </h1>
              </div>
            </div>
          </div>
          <button className="border px-3 py-2 text-center bg-orange-500 w-28 mt-5 hover:text-white font-nunito  flex justify-between items-center">
            Book <IoIosArrowRoundForward className="text-2xl" />{" "}
          </button>
        </div>

        <div className="flex justify-start items-center gap-10 mt-8">
          <h1 className="flex justify-around items-center gap-1 text-xl font-nunito ">
            <MdEmojiTransportation /> Transport
          </h1>
          <h1 className="flex justify-around items-center gap-1 text-xl font-nunito">
            <LiaHotelSolid /> Hotel
          </h1>
          <h1 className="flex justify-around items-center gap-1 text-xl font-nunito ">
            <IoFastFood /> Breakfast
          </h1>
          <h1 className="flex justify-around items-center gap-1 text-xl font-nunito ">
            <IoCarSportSharp /> Sightseeing
          </h1>
        </div>

        <div>
          <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
            {" "}
            <MdOutlineLibraryBooks /> Overview
          </h1>
          <p className="mt-2 font-nunito">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            exercitationem blanditiis dignissimos quas qui hic recusandae,
            magnam cupiditate ullam maxime, reprehenderit consectetur eos
            aperiam praesentium deserunt veritatis. Numquam, officiis iure?
          </p>
        </div>
        
        <div>
        <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
            {" "}
            <LiaThumbtackSolid /> Included - Excluded
          </h1>
          <div className="mt-5 grid grid-cols-2 ">
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> Return ticket </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> Airport pick and drop </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> Wellcome drinks </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> Breakfast </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> Sharing room </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> 3 star accomodation </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> A/C Car </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500"  className="text-orange-500"/> Parking and toll fee </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> English-hindi spoken driver </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> 24/7 Support </p>
         <p className="flex items-center gap-3 font-nunito"> <GoCheckCircle className="text-orange-500" /> Tourit visa proccesing </p>
         <p className="flex items-center gap-3 font-nunito"> <AiOutlineCloseCircle  className="text-red-500" />  Personal cost </p>
         <p className="flex items-center gap-3 font-nunito"> <AiOutlineCloseCircle  className="text-red-500" />  Others cost </p>
        
          </div>
        </div>
        <div>
        <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
            {" "}
            <MdAddLocationAlt /> Tour Location
          </h1>
         <div className="flex items-center gap-4 mt-5 ">
         <img className="w-[320px] h-48" src="https://images.unsplash.com/photo-1648471755440-fb27a86238bb?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <img className="w-[320px] h-48"  src="https://images.unsplash.com/photo-1694854573574-9487bc7b6282?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
        </div>
      </div>
      <div className="col-span-4 font-playfair">Input your info</div>
    </div>
  );
};

export default PackageDetails;

import React from "react";

import SectionHeading2 from "../../SectionHeading/SectionHeading2";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import TicketSlider from "../../TicketSlider/TicketSlider";
import { Link } from "react-router-dom";

const DomesticTicket = () => {
  return (
    <div className="mt-20 container max-w-7xl pl-6 mx-auto">
      <SectionHeading2
        subHeadingTag={"Choose Your Ticket "}
        headingFirst={"Ultimate,"}
        heading2nd={"Getaway"}
      ></SectionHeading2>
      
      
        <section className=" mt-10 ">
          
            <div className="   md:flex justify-between gap-3 items-center ">
              {/* Text Section (Left) */}
              <div className=" space-y-2 md:w-[35rem]   ">
                <h3 className="text-2xl font-semibold md:text-4xl font-playfair pb-4">
                  Domestic, Ticket
                </h3>
                <p className="font-nunito font-light">
                  Explore seamless domestic travel with our curated ticketing
                  options. Select your preferred destination from across the
                  country and enjoy hassle-free booking at your convenience. Let
                  us make your journey comfortable and memorable!
                </p>

                {/* <div className="bg-black h-[2px]"></div> */}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2  pt-3 md:pt-4">
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Cox-Bazar
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Jessor
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Rajshahi
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Chittagong
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Syedpur
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Barishal
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Sylhet
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Shariatpur
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Chandpur
                  </Link>
                </div>
              </div>

              {/* slider section (right) */}
              <div className=" md:w-[43rem] ">
                <TicketSlider />
              </div>
          
          </div>
        </section>
      </div>
    
  );
};

export default DomesticTicket;

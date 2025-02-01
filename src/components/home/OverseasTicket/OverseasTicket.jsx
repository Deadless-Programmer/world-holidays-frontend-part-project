import React from "react";

import SectionHeading2 from "../../SectionHeading/SectionHeading2";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import TicketSlider from "../../TicketSlider/TicketSlider";
import { Link } from "react-router-dom";

const DomesticTicket = () => {
  return (
    <div className="mt-20 container max-w-7xl pl-6 mx-auto">
    
      
        <section className=" mt-10 ">
          
            <div className="   md:flex justify-between gap-3 items-center ">
                  {/* slider section (right) */}
              <div className=" md:w-[43rem] mb-10 md:mb-0">
                <TicketSlider />
              </div>
              {/* Text Section (Left) */}
              <div className=" space-y-2 md:w-[35rem]   ">
                <h3 className="text-2xl font-semibold md:text-4xl font-playfair pb-4">
                  Oversieas, Ticket
                </h3>
                <p className="font-nunito font-light">
                  Explore seamless oversieas travel with our curated ticketing
                  options. Select your preferred destination from across the
                  country and enjoy hassle-free booking at your convenience. Let
                  us make your journey comfortable and memorable!
                </p>

                {/* <div className="bg-black h-[2px]"></div> */}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2  pt-3 md:pt-4">
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> America
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Canada
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> France
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Italy
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> England
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Thailand
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Singapore
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Malaysia
                  </Link>
                  <Link className="flex items-center gap-2 font-nunito font-light text-orange-800">
                    <MdOutlineLocationOn className="text-lg" /> Maldives
                  </Link>
                </div>
              </div>

            
          
          </div>
        </section>


      </div>
    
  );
};

export default DomesticTicket;

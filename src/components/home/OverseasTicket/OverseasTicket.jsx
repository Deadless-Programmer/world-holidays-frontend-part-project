import React, { useEffect, useState } from "react";

import SectionHeading2 from "../../SectionHeading/SectionHeading2";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import TicketSlider from "../../TicketSlider/TicketSlider";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const DomesticTicket = () => {

  const [ticketData, setTicketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("/InternationalTicket.json")
      .then((res) => {
        if (!res.ok) {
          throw new toast("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setTicketData(data);
        setLoading(false);
      })
      .catch((error) => {
        setErr(error.message);
        setLoading(false);
      });
  }, []);


  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <BeatLoader  color="#FFA500" loading={true} size={15} />
      </div>
    ); 
  if (err) return toast({ err });
  return (
    <div className="mt-20 container max-w-7xl pl-6 mx-auto">
    
      
        <section className=" mt-10 ">
          
            <div className="   md:flex justify-between gap-3 items-center ">
                  {/* slider section (right) */}
              <div className=" md:w-[43rem] mb-10 md:mb-0">
              {ticketData.length > 0 && <TicketSlider ticketData={ticketData} />}
              </div>
              {/* Text Section (Left) */}
               {ticketData.map(ticket=><div key={ticket._id} className=" space-y-2 md:w-[35rem]   ">
                              <h3 className="text-2xl font-semibold md:text-4xl font-playfair pb-4">
                               {ticket.title}
                              </h3>
                              <p className="font-nunito font-light">
                              {ticket.description}
                              </p>
              
                              {/* <div className="bg-black h-[2px]"></div> */}
              
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2  pt-3 md:pt-4">
              
                                {ticket.locations.map((location,indx)=><Link key={indx} className="flex items-center gap-2 font-nunito font-light text-orange-800">
                                  <MdOutlineLocationOn className="text-lg" /> {location.name}
                                </Link>)}
                                
                              
                              </div>
                            </div>) }

            
          
          </div>
        </section>


      </div>
    
  );
};

export default DomesticTicket;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from "react-router-dom";
import { SlArrowRightCircle } from "react-icons/sl";

function TicketSlider({ ticketData = [] }) { // ✅ Default empty array
  console.log("Received domestice:", ticketData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="overflow-hidden">
      <Slider className="mt-5 md:mt-0 md:pr-6" {...settings}>
        {ticketData[0]?.locations.map((item) => (
          <div key={item._id}>
            <div className="h-[390px] md:h-96 w-full md:w-[315px] p-2 md:p-0">
              {/* ✅ Check if locations exist before mapping */}
             
                <div  className="group overflow-hidden relative h-full">
                  <img
                    src={item.image}  // ✅ Use location.image instead of item.image
                    alt={item.name}   // ✅ Proper alt text
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />
                  <h1 className="flex items-center absolute top-3 left-3  text-white bg-orange-500 p-2 font-nunito">
                    {item.name} {/* ✅ Display correct location name */}
                  </h1>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="text-3xl font-nunito font-bold text-white flex flex-col items-center gap-2">
                      <Link className="text-white border p-2 text-lg font-semibold flex items-center justify-center gap-2">
                        Explore <span><SlArrowRightCircle /></span>
                      </Link>
                    </div>
                  </div>
                </div>
         
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TicketSlider;

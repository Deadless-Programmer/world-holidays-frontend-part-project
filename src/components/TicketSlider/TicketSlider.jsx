import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import { Link } from "react-router-dom";

import { SlArrowRightCircle } from "react-icons/sl";

function TicketSlider() {
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

  const destinations = [
    { id: 1, img: 'https://images.pexels.com/photos/12538151/pexels-photo-12538151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, img: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, img: 'https://images.pexels.com/photos/2587319/pexels-photo-2587319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, img: 'https://images.pexels.com/photos/2928012/pexels-photo-2928012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, img: 'https://images.pexels.com/photos/29237522/pexels-photo-29237522/free-photo-of-stunning-aerial-view-of-faraglioni-rocks-in-capri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, img: 'https://images.pexels.com/photos/16620071/pexels-photo-16620071/free-photo-of-boats-and-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 7, img: 'https://images.pexels.com/photos/27199637/pexels-photo-27199637/free-photo-of-capri-e-il-suo-mare.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 8, img: 'https://images.pexels.com/photos/12671154/pexels-photo-12671154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 9, img: 'https://images.pexels.com/photos/17599722/pexels-photo-17599722/free-photo-of-view-of-the-sea-and-the-natural-arch-on-capri-island.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  return (
    <div className=" overflow-hidden   ">


    <Slider className="mt-5 md:mt-0 md:pr-6" {...settings}>
  {destinations.map((item) => (
    <div key={item.id}>
      <div className=" h-[390px] md:h-96 w-full md:w-[315px] p-2 md:p-0">
        {/* Add the group class here */}
        <div className="group overflow-hidden relative h-full">
          <img
            src={item.img}
            alt={`Destination ${item.id}`}
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Text overlay */}
          <h1 className="flex items-center absolute top-12 -left-7  -rotate-90 text-white bg-orange-500 p-2 font-nunito">  New Zealand</h1>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="text-3xl font-nunito font-bold text-white flex flex-col items-center gap-2">
          
          
            <Link className="text-white border p-2 text-lg  font-semibold flex items-center justify-center gap-2">
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

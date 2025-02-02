import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import { BiCalendar } from "react-icons/bi";

const NextTour = () => {
  return (
    <div className='overflow-x-hidden w-auto mt-24 relative h-[50vh] md:h-[70vh]' >
      

<video
  src="https://duruthemes.com/demo/html/travol/travel-video.mp4"
  className="absolute top-0 left-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
/>
{/* <iframe
  src="https://www.youtube.com/embed/GWNrPJyRTcA?autoplay=1&mute=1&loop=1&playlist=GWNrPJyRTcA"
  className="absolute top-0 left-0 w-full  h-full object-cover"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe> */}


      {/* Content Overlay */}

      <div className='absolute top-0 left-0 bg-[#0f2454] opacity-30 w-full h-full'>

       

      </div>

      {/* text section */}
      <div className="absolute  top-0 left-0 w-full h-full  flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl z-10 font-playfair font-bold">
          Our Next Tour Is Maldives
        </h1>
        <div className='flex items-center justify-center gap-4 mt-3'>

        <p className='flex text-white font-nunito items-center gap-1'> <span className='text-xl'><MdOutlineLocationOn/></span> <span>Maldives</span>  </p>
        <p className='flex text-white font-nunito items-center gap-1'> <span className='text-xl'><PiClockCountdownFill/></span>  <span> 4 Days + 3 Night</span>  </p>
        {/* <p className='flex text-white font-nunito items-center gap-1'> <span className='text-xl'>< BiCalendar/></span>  <span> 3 April To 7 April</span>  </p> */}
        </div>
      </div>
     
    </div>
  );
};

export default NextTour;

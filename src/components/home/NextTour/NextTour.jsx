import React, { useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import { BiCalendar } from "react-icons/bi";
import { motion } from "motion/react";
import { easeInOut } from "motion";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
const NextTour = () => {





const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  // const notify = () => toast('Wow so easy !');

  useEffect(() => {
    fetch("http://localhost:5000/next_tour")
      .then((res) => {
        if (!res.ok) {
          throw new toast("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPackages(data);
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

// console.log(packages)
// const package=packages.forEach(data=>)


  return (
    <>
    {
      packages.map((packagedata,indx)=> <div key={indx} className="overflow-x-hidden w-auto mt-24 relative h-[50vh] md:h-[70vh]">
        {/* <video
          src={packagedata.video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        /> */}
        <img
          src={packagedata.CoverImage}
          className="absolute top-0 left-0 w-full h-full object-cover"
          
        />
        {/* <iframe
  src="https://www.youtube.com/embed/GWNrPJyRTcA?autoplay=1&mute=1&loop=1&playlist=GWNrPJyRTcA"
  className="absolute top-0 left-0 w-full  h-full object-cover"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe> */}

        {/* Content Overlay */}

        <div className="absolute top-0 left-0 bg-[#0f2454] opacity-30 w-full h-full"></div>

        {/* text section */}
        <Link to={`/next_tour_details/${packagedata._id}`} className="absolute  top-0 left-0 w-full h-full  flex flex-col items-center justify-center">
          <motion.h1
            animate={{ x: 10 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
              repeat: Infinity,
            }}
            className="text-white text-2xl md:text-4xl z-10 font-playfair font-bold"
          >
            Our Next Tour Is Maldives
          </motion.h1>
          <div className="flex items-center justify-center gap-4 mt-3">
            <p className="flex text-white font-nunito items-center gap-1">
              {" "}
              <span className="text-xl">
                <MdOutlineLocationOn />
              </span>{" "}
              <span>{packagedata.location}</span>{" "}
            </p>
            <p className="flex text-white font-nunito items-center gap-1">
              {" "}
              <span className="text-xl">
                <PiClockCountdownFill />
              </span>{" "}
              <span> {packagedata.duration}</span>{" "}
            </p>
            {/* <p className='flex text-white font-nunito items-center gap-1'> <span className='text-xl'>< BiCalendar/></span>  <span> 3 April To 7 April</span>  </p> */}
          </div>
        </Link>
      </div>)
    }
     
    </>
  );
};

export default NextTour;

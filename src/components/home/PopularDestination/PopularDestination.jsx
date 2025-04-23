import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import SectionHeading from "../../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlArrowRightCircle } from "react-icons/sl";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

function PopularDestination() {

const [destination, setDestination] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  // const notify = () => toast('Wow so easy !');

  useEffect(() => {
    fetch("https://world-holidays-backend-part-two.vercel.app/popular_destination")
      .then((res) => {
        if (!res.ok) {
          throw new toast("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDestination(data);
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





  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className=" overflow-hidden  mt-20  ">

<SectionHeading className=''
        subHeadingTag={"Choose your dream Destination"}
        headingFirst={"Most Popular"}
        heading2nd={"Destination"}
      ></SectionHeading>
    <Slider className="mt-4 max-w-7xl mx-auto px-6" {...settings}>
  {destination.map((item) => (
    <div key={item._id}>
      <div className="h-[70vh] md:w-[390px] relative p-2 md:p-0">
        {/* Add the group class here */}
        <div className="group overflow-hidden  h-full">
          <img
            src={item.image}
            alt={`Destination ${item.id}`}
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Text overlay */}
          <h1 className=" absolute  top-3 left-3 z-10  text-white bg-orange-500 p-2 font-nunito">  {item.country}</h1>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="text-3xl font-nunito font-bold text-white flex flex-col items-center gap-2">
          
          
            <Link to={`/popular-destination-details/${item._id}`} className="text-white border p-2 text-lg  font-semibold flex items-center justify-center gap-2">
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

export default PopularDestination;

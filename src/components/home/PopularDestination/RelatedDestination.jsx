import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import SectionHeading from "../../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlArrowRightCircle } from "react-icons/sl";
import { BeatLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

function RelatedDestination({id}) {

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



console.log(destination)
  const relatedDes = destination.filter(item=>item._id!==id)



console.log(relatedDes)







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

  // const destinations = [
  //   { id: 1, img: 'https://images.pexels.com/photos/12538151/pexels-photo-12538151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 2, img: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 3, img: 'https://images.pexels.com/photos/2587319/pexels-photo-2587319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 4, img: 'https://images.pexels.com/photos/2928012/pexels-photo-2928012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 5, img: 'https://images.pexels.com/photos/29237522/pexels-photo-29237522/free-photo-of-stunning-aerial-view-of-faraglioni-rocks-in-capri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 6, img: 'https://images.pexels.com/photos/16620071/pexels-photo-16620071/free-photo-of-boats-and-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 7, img: 'https://images.pexels.com/photos/27199637/pexels-photo-27199637/free-photo-of-capri-e-il-suo-mare.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 8, img: 'https://images.pexels.com/photos/12671154/pexels-photo-12671154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 9, img: 'https://images.pexels.com/photos/17599722/pexels-photo-17599722/free-photo-of-view-of-the-sea-and-the-natural-arch-on-capri-island.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  // ];

  return (
    <div className=" overflow-hidden  mt-10  ">
      <ToastContainer/>

    <Slider className="mt-4 " {...settings}>
  {relatedDes.map((item) => (
    <div key={item._id}>
      <div className="h-[70vh]  p-2 ">
        {/* Add the group class here */}
        <div className="group overflow-hidden relative h-full">
          <img
            src={item.image}
            alt={`Destination ${item.name}`}
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h1 className="absolute  top-3 left-3 z-10  text-white bg-orange-500 p-2 font-nunito">  {item.country}</h1>
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

export default RelatedDestination;

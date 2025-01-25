import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import SectionHeading from "../../SectionHeading/SectionHeading";

function PopularDestination() {
  const settings = {
    dots: true,
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
          dots: true
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
    <div className=" overflow-hidden  mt-20  ">

<SectionHeading className=''
        subHeadingTag={"Choose your dream Destination"}
        headingFirst={"Most Popular"}
        heading2nd={"Destination"}
      ></SectionHeading>
      <Slider className=" mt-4 max-w-7xl mx-auto px-6" {...settings}>
        {destinations.map((item) => (
          <div className=""
            
            key={item.id}
          >
            <div className="h-[60vh] md:h-[70vh]  md:w-[390px] w-80 p-2 md:p-0   overflow-hidden ">
              <img
                src={item.img}
                alt={`Destination ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PopularDestination;

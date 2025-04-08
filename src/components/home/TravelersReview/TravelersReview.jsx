import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useWindowSize } from "react-use";
import { Parallax, Background } from 'react-parallax';
import useTravelersReview from "../../../hooks/useTravelersReview";
const TravelersReview = () => {
  const { width } = useWindowSize();
  const sliderWidth = width > 768 ? 375 : width * 0.9;
  const sliderHeight = width > 768 ? 520 : sliderWidth * 1.2;
  
  // const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setReviews(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setErr(error.message);
  //       setLoading(false);
  //     });
  // }, []);

  const [reviews, refetch]=useTravelersReview();

  // if (loading)
  //   return (
  //     <div className="flex justify-center items-center h-[50vh]">
  //       <BeatLoader color="#FFA500" loading={true} size={15} />
  //     </div>
  //   );

  // if (err) return toast.error(err);

  const images = reviews.map((review) => ({ url: review.image }));
  const reviewTexts = reviews.map((review) => review.p_description);

  return (

    <Parallax className="mb-20 bg-cover bg-center"
        blur={{ min: -15, max: 15 }}
        bgImage={'https://images.unsplash.com/photo-1529970120821-d8cf525bc023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        bgImageAlt="the dog"
        strength={-200}
    >
      
    <div className="   mb-14 md:mb-0  h-screen flex items-center justify-center w-full">
    <header className="md:flex  items-center min-h-[500px] justify-between  max-w-5xl w-full mx-auto space-y-8 md:space-y-0">
        
        {/* Left Side (Text) */}
        <div className="z-10 w-full bg-white/80 backdrop-blur-lg   p-6 md:p-10">
          <p className="uppercase font-semibold text-sm text-gray-600 tracking-[0.75rem]">
            Testimonials
          </p>
          <h2 className="uppercase font-light text-4xl text-gray-600 mt-2">
            Travelers Reviews
          </h2>
          <p className="text-base leading-6 mt-4">
            {reviewTexts[currentIndex]}
          </p>
        </div>

        {/* Right Side (Image Slider) */}
        <figure className="relative w-full md:w-1/2 flex justify-center pb-8 md:pb-0">
          <SimpleImageSlider
            width={sliderWidth}
            height={sliderHeight}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={3}
            onStartSlide={(index) => setCurrentIndex(index - 1)} // Adjusting for zero-based index
            style={{ borderRadius: "10px", overflow: "hidden" }}
          />
        </figure>
      </header>
    </div>
    </Parallax>
  );
};

export default TravelersReview;

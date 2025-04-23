import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { useWindowSize } from "react-use";
import { Parallax } from "react-parallax";
import useTravelersReview from "../../../hooks/useTravelersReview";

const TravelersReview = () => {
  const { width } = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews] = useTravelersReview();

  const images = reviews.map((review) => ({ url: review.image }));
  const reviewTexts = reviews.map((review) => review.p_description);

  // Better responsive handling
  let sliderWidth;
  if (width < 768) {
    sliderWidth = width * 0.9;
  } else if (width >= 768 && width < 1024) {
    sliderWidth = 350;
  } else {
    sliderWidth = 400;
  }

  const sliderHeight = sliderWidth * 1.2;

  return (
    <Parallax
      className="mb-20 bg-cover bg-center"
      blur={{ min: -15, max: 15 }}
      bgImage="https://images.unsplash.com/photo-1529970120821-d8cf525bc023?q=80&w=2070&auto=format&fit=crop"
      strength={-200}
    >
      <div className="py-16 px-4 md:px-8 flex justify-center items-center">
        <header className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10 md:gap-0">
          {/* Left Side (Text) */}
          <div className="z-10 w-full  bg-white/80 backdrop-blur-lg p-6 md:p-10  shadow-md">
            <p className="uppercase font-semibold text-sm text-gray-600 tracking-[0.75rem]">
              Testimonials
            </p>
            <h2 className="uppercase font-light text-3xl md:text-4xl text-gray-600 mt-2">
              Travelers Reviews
            </h2>
            <p className="text-base leading-6 mt-4">
              {reviewTexts[currentIndex]}
            </p>
          </div>

          {/* Right Side (Image Slider) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <SimpleImageSlider
              width={sliderWidth}
              height={sliderHeight}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              autoPlayDelay={3}
              onStartSlide={(index) => setCurrentIndex(index - 1)}
              style={{  overflow: "hidden" }}
            />
          </div>
        </header>
      </div>
    </Parallax>
  );
};

export default TravelersReview;

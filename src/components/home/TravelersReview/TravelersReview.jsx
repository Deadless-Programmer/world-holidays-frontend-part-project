import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { BeatLoader } from "react-spinners";
// import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useWindowSize } from "react-use";

// const images = [
//   { url: "https://images.unsplash.com/photo-1606525380696-c2bfe72f7b8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { url: "https://plus.unsplash.com/premium_photo-1677636665394-bb909dbc5f6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { url: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { url: "https://images.unsplash.com/photo-1546961342-ea5f71b193f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { url: "https://images.unsplash.com/photo-1526449870103-234e4c371681?q=80&w=1707&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
// ];






const TravelersReview = () => {
  const { width } = useWindowSize();

  // Adjust slider size based on screen width
  const sliderWidth = width > 768 ? 375 : width * 0.9; // 90% of screen width on small devices
  const sliderHeight = width > 768 ? 520 : sliderWidth * 1.2; // Maintain aspect ratio
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  // const notify = () => toast('Wow so easy !');
  
  useEffect(() => {
    fetch("/TravelersReview.json")
      .then((res) => {
        if (!res.ok) {
          throw new toast("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
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

  const images = reviews.map((review) => review.image);
 const reviewText = reviews.map((review)=>review.p_description);




// const Reviewimage = reviews.filter(review => review.image);
// console.log(image)
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1529970120821-d8cf525bc023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center justify-center">
      <header className="md:flex  items-center justify-between  max-w-5xl w-full mx-auto space-y-8  md:space-y-0">
        {/* Left Side (Text) */}
        <div className="z-10 bg-white/80 backdrop-blur-lg pt-10 pb-10 pr-10 pl-6 ">
          <p className="uppercase font-semibold text-sm text-gray-600 tracking-[0.75rem]">
            Testimonials
          </p>
          <h2 className="uppercase font-light text-4xl text-gray-600 mt-2">
            Travelers Reviews
          </h2>
          <p className="text-base leading-6 mt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Right Side (Image Slider) */}
        <figure className=" relative w-full md:w-1/2 flex justify-center pb-8 md:pb-0">
          <SimpleImageSlider
            width={sliderWidth}
            height={sliderHeight}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={3}
            style={{ borderRadius: "10px", overflow: "hidden" }}
          >
           
          </SimpleImageSlider>
         
        </figure>
      </header>
    </div>
  );
};

export default TravelersReview;

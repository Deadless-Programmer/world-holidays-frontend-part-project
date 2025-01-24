import React from "react";
import ImageGallery from "./ImageGallery";


const PopularTours = () => {
 

  return (
   <section className="container max-w-7xl p-6 mx-auto ">
	 <p className='font-nunito text-xs  uppercase tracking-widest '>Choose your dream place</p>
     <h1 className="text-2xl font-semibold sm:text-4xl font-playfair mt-1 uppercase">Popular <span className='text-orange-500 '>Tours</span></h1>
       <ImageGallery/>
</section>
  );
};

export default PopularTours;

import React from 'react'

import Lottie from "lottie-react";
import animationData from "../../../public/image/couple.json";
const DashboardCoverImage = () => {
    return (
        <div className="w-full   ">
          <Lottie animationData={animationData} loop={true} autoplay={true} 
   />
        </div>
      );
}

export default DashboardCoverImage
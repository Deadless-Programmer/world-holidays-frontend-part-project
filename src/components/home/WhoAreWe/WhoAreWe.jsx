import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";


const WhoAreWe = () => {
  return (
    <div> <section className="dark:bg-gray-200 dark:text-gray-800  ">
    <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12" bis_skin_checked="1">
      <div  className="block max-w-sm gap-3 mx-auto sm:max-w-full  lg:grid lg:grid-cols-12 place-items-center dark:bg-gray-50">
        <img src="https://i.postimg.cc/nV29vpYr/woman-6010055-1920.jpg" alt="" className="object-cover w-full h-64  sm:h-96 lg:col-span-7 dark:bg-gray-500" />
        <div className="md:p-6 pt-9 space-y-2 lg:col-span-5" bis_skin_checked="1">
            
          <h3 className="text-3xl font-semibold md:text-4xl font-playfair pb-4 ">Find Your <span className='text-orange-500 '>Best Travel</span> Details With Us</h3>
          {/* <span className="text-xs dark:text-gray-600">February 19, 2021</span> */}
          <p className='font-nunito font-light'>As a trusted IATA-certified agent, we offer reliable and seamless travel solutions. From flight bookings to custom itineraries, our expert team ensures every detail of your journey is perfectly planned.</p>

          <div className='bg-black h-[2px] '></div>

          <p className='font-nunito font-light'>We also provide easy EMI payment options to make your dream trips more affordable. Travel the world stress-free with flexible payment plans designed for your convenience.</p>

          <p className='flex items-center gap-2 font-nunito font-light'> <FaCircleCheck  /> IATA Certified Agent </p>
          <p className='flex items-center gap-2  font-nunito font-light'> <FaCircleCheck /> Easy EMI Payment Options </p>
        </div>
      </div>
      
    </div>
  </section>
  
   </div>
  )
}

export default WhoAreWe
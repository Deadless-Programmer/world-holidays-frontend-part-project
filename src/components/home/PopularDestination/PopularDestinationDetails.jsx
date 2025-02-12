import React from 'react'
import PageHeader from '../../PageHeader/PageHeader';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaRegStar } from 'react-icons/fa6';
import { HiMiniCalendarDateRange } from 'react-icons/hi2';
import { MdAddLocationAlt, MdEmojiTransportation, MdLocationOn, MdOutlineLibraryBooks } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { LiaHotelSolid, LiaThumbtackSolid } from 'react-icons/lia';
import { IoCarSportSharp, IoFastFood, IoReloadCircleOutline } from 'react-icons/io5';
import { GoCheckCircle } from 'react-icons/go';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import RelatedDestination from './RelatedDestination';

const PopularDestinationDetails = () => {
  return (
    <div>
        <PageHeader heading={'Popular Destination'}  paragraph={'Explore most popular destinations detail'} bgImage={'https://images.unsplash.com/photo-1605200723310-5df264c13e22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <div className="container max-w-7xl mx-auto md:grid grid-cols-12 gap-16 mt-8 p-6">
                <div className="col-span-8">
                  <img
                    src="https://images.unsplash.com/photo-1628438273202-a26e785d044f?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="flex justify-between mt-5">
                    <h1 className="font-playfair text-3xl font-semibold items-end">
                      Fulhadoo
                    </h1>
                   
                  </div>
                 
        
                 
        
                  <div>
                    <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
                      {" "}
                      <MdOutlineLibraryBooks /> Overview
                    </h1>
                    <p className="mt-2 font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                      exercitationem blanditiis dignissimos quas qui hic recusandae,
                      magnam cupiditate ullam maxime, reprehenderit consectetur eos
                      aperiam praesentium deserunt veritatis. Numquam, officiis iure?
                    </p>
                    <p className="mt-2 font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                      exercitationem blanditiis dignissimos quas qui hic recusandae,
                      magnam cupiditate ullam maxime, reprehenderit consectetur eos
                      aperiam praesentium deserunt veritatis. Numquam, officiis iure?
                    </p>
                    <p className="mt-2 font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                      exercitationem blanditiis dignissimos quas qui hic recusandae,
                      magnam cupiditate ullam maxime, reprehenderit consectetur eos
                      aperiam praesentium deserunt veritatis. Numquam, officiis iure?
                    </p>
                  </div>
        
                  
                  <div>
                    <h1 className="flex items-center gap-2 font-playfair text-2xl mt-16">
                      {" "}
                      <IoReloadCircleOutline /> Realated Destination
                    </h1>
                   <RelatedDestination/>
                  </div>
                </div>
                <div className="col-span-4  bg-zinc-50 h-[550px]">
                  <h1 className="text-2xl text-center mt-5 pt-5 md:pt-0 font-playfair">Tour Booking</h1>
                  <form action="">
                    <div class="flex flex-col items-center font-nunito justify-center ">
                      <input
                        type="text"
                        placeholder="Your Name"
                        class=" p-3 outline-none w-72 mt-8 "
                      />
                      <input
                        type="text"
                        placeholder="Your phone"
                        class=" p-3 outline-none w-72 mt-4 "
                      />
                      <input
                        type="email"
                        placeholder="Your email"
                        class=" p-3 outline-none w-72 mt-4 "
                      />
                      <input
                        type="text"
                        placeholder="Your location"
                        class=" p-3 outline-none w-72 mt-4 "
                      />
                      <input
                        type="text"
                        placeholder="Guest No. -input adult & child"
                        class=" p-3 outline-none w-72 mt-4 "
                      />
                      <input
                        type="date"
                        placeholder="date"
                        class=" p-3 outline-none w-72 mt-4 "
                      />
                      
                      
                    <button className="border px-3 py-2 w-72 text-center bg-orange-500  mt-5 hover:text-white font-nunito  flex justify-between items-center">
                      Book <IoIosArrowRoundForward className="text-2xl" />{" "}
                    </button>
                    </div>
        
                  </form>
                </div>
              </div>
    </div>
  )
}

export default PopularDestinationDetails;
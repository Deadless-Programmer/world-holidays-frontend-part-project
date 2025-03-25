import React from 'react'
import { PiCheckCircleLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (
    <section className=" max-w-7xl mx-auto py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold font-playfair"> <span className='text-orange-500'>Explore</span> Our Services</h2>
			<p className=" text-sm dark:text-gray-600 font-nunito">We offer customized tours, hassle-free bookings, and everything you need for a seamless travel experience.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
				<Link to='/' rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 hover:scale-105 transition-all duration-1000 dark:bg-gray-500" src="https://images.unsplash.com/photo-1518206075495-4e901709d372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				</Link>
				<div className="flex flex-col flex-1 pt-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline font-nunito  dark:text-violet-600">AIR TICKETING</a>
					
					
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<Link to='/services/visa-processing' aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 hover:scale-105 transition-all duration-1000 dark:bg-gray-500" src="https://images.pexels.com/photos/7009611/pexels-photo-7009611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</Link>
				<div className="flex flex-col flex-1 pt-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-nunito"> VISA PROCESSING</a>
				
				
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 hover:scale-105 transition-all duration-1000 dark:bg-gray-500" src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</a>
				<div className="flex flex-col flex-1 pt-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline font-nunito dark:text-violet-600">HOTEL BOOKING</a>
				
					
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<Link to='/packages' aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 hover:scale-105 transition-all duration-1000 dark:bg-gray-500" src="https://images.pexels.com/photos/16271983/pexels-photo-16271983/free-photo-of-ferris-wheel-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</Link>
				<div className="flex flex-col flex-1 pt-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline font-nunito dark:text-violet-600">HOLIDAY PACKAGE</a>
				
					
				</div>
			</article>
		</div>
	</div>
    <div className="space-y-2 text-center my-16">
			<h2 className="text-3xl font-bold font-playfair"> What can we do also more</h2>
			<p className=" text-sm dark:text-gray-600 font-nunito ">Our services include everything there is related to tourism, such as</p>
		</div>
    <div className='md:grid grid-cols-12 place-items-center p-5'>
        
       <div className='col-span-6'>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl font-nunito'><PiCheckCircleLight /> <span>International airlines reservations & ticketing</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>International boat, bus & railways ticketing</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>Worldwide car rental</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>Ground handling services</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>Tour guides - we speak your language</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>All over the year excursions and itinerariesg</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>Conferences & MISC</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>Cruises worldwide & locally</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>Camping services</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>Arrange picnic services</span></p>
            <p className='flex justify-start items-center gap-3 text-base md:text-xl mt-2 font-nunito'><PiCheckCircleLight /> <span>Meet & assist services</span></p>
           
       </div>
       <div className='col-span-6 mt-8 md:mt-0'>
        <img src="https://images.unsplash.com/photo-1587089879249-87bf7d2972df?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
    </div>
</section>
  )
}

export default OurServices
import React from 'react'

const OurServices = () => {
  return (
    <div><section className=" max-w-7xl mx-auto py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold font-playfair"> <span className='text-orange-500'>Explore</span> Our Services</h2>
			<p className=" text-sm dark:text-gray-600 font-nunito">We offer customized tours, hassle-free bookings, and everything you need for a seamless travel experience.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 hover:scale-105 transition-all duration-1000 dark:bg-gray-500" src="https://images.unsplash.com/photo-1518206075495-4e901709d372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				</a>
				<div className="flex flex-col flex-1 pt-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline font-nunito  dark:text-violet-600">AIR TICKETING</a>
					
					
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 hover:scale-105 transition-all duration-1000 dark:bg-gray-500" src="https://images.pexels.com/photos/7009611/pexels-photo-7009611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</a>
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
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 hover:scale-105 transition-all duration-1000 dark:bg-gray-500" src="https://images.pexels.com/photos/16271983/pexels-photo-16271983/free-photo-of-ferris-wheel-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</a>
				<div className="flex flex-col flex-1 pt-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline font-nunito dark:text-violet-600">HOLIDAY PACKAGE</a>
				
					
				</div>
			</article>
		</div>
	</div>
</section></div>
  )
}

export default OurServices
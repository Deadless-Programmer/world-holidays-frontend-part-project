import React from 'react'

const PageHeader = () => {
  return (
    <div className='relative h-[60vh] bg-[url("https://cdn.pixabay.com/photo/2023/03/31/14/39/ocean-7890172_1280.jpg")] bg-cover bg-center'>
    <div className="absolute inset-0 bg-slate-900 bg-opacity-50">
    
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <p className="text-white text-xl font-bold font-nunito">About Us</p>
      <h1 className='text-white text-5xl font-bold font-playfair mt-2'>Our Story In World Holidays </h1>
    </div>
    
  </div>
  
  )
}

export default PageHeader
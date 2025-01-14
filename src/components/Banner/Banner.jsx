import React, { useState, useEffect } from 'react';

const Banner = () => {
  const images = [
    'https://i.postimg.cc/6QfSNKPQ/parthenon-4396367-1920.jpg',
    // 'https://i.postimg.cc/P5fjnBRK/polynesia-3021072-1920.jpg',
    // 'https://i.postimg.cc/3x9vF461/beach-666122-1280.jpg',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[100vh] overflow-hidden ">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 animate-zoomOutLeftToRight left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}
 {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div> 
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 ">
        <p className='font-nunito text-sm text-white uppercase tracking-widest '> Discoer    the    World’s   Hidden   Gemss</p>
        <h1 className="font-playfair text-6xl selection:bg-orange-500 font-black leading-tight text-white mb-4  pt-3 w-4/5 tracking-wide">
        Create memories with exclusive adventure packages
        </h1>
        
      </div>

      <div className='  bg-slate-100 z-10 h-24 pl-4 pr-4  bg-opacity-40 absolute left-0 right-0 bottom-24 m-auto w-fit  flex justify-center items-center 	 '>
           <div className='flex justify-center items-center'>
           <input type="text" className='outline-none p-[19.6px] w-64 mr-[1px] font-nunito text-base'  placeholder='Where to ?'/>
            <select className='outline-none p-5  w-64 mr-[1px] font-nunito text-base' name="" id="">
              <option disabled selected className='' value="">Pick your favorite place</option>
              <option className='p-3 outline-none' value="Nepal">Nepal</option>
              <option value="Thailand">Thailand</option>
              <option value="Maldive">Maldive</option>
              <option value="Srilanka">Srilanka</option>
              <option value="Vietnam">Vietnam</option>
            </select>
            <select className='outline-none p-5  w-64 mr-[1px] font-nunito text-base' name="" id="">
              <option disabled selected className='' value="">Duration</option>
              <option value="oneDay">1 Day Tour</option>
              <option value="underFourDaysTour">2-4 Day Tour</option>
              <option value="underSevenDaysTour">5-7 Days Tour</option>
              <option value="tenDaysTour">8-10 Days Tour</option>
              <option value="tenDaysplusTour">10+ Days Tour</option>
            </select>
            <button className='outline-none p-5 w-64 bg-orange-500 hover:bg-orange-800 text-white font-nunito text-base '>Find Now</button>
           </div>
          
       </div>
      
    </div>
  );
};

export default Banner;

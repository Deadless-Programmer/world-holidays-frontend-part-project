import React, { useState, useEffect } from 'react';

const Banner = () => {
  const images = [
    'https://i.postimg.cc/QCzPRdHW/bastei-3014467-1920.jpg',
    'https://i.postimg.cc/P5fjnBRK/polynesia-3021072-1920.jpg',
    'https://i.postimg.cc/3x9vF461/beach-666122-1280.jpg',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 5 seconds
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Your Adventure
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore the beauty of the world with us.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;

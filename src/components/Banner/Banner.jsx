import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat animate-moveBg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
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

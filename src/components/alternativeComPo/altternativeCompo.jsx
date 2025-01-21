import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="bg-gradient-to-t from-[#accbee] to-[#e7f0fd] min-h-screen font-raleway">
      {/* About Section */}
      <div className="fixed bottom-2 right-2 z-10 flex justify-end items-end w-10 h-10 hover:w-28 hover:h-28 transition-all duration-200 ease-in-out">
        <a
          className="absolute w-10 h-10 rounded-full bg-black/20 flex justify-center items-center backdrop-blur-sm hover:opacity-100 opacity-0 portfolio"
          href="https://www.rafaelalucas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon bg-[url('https://rafaelavlucas.github.io/assets/codepen/link.svg')] bg-center bg-no-repeat bg-contain"></span>
        </a>
        <a
          className="absolute w-10 h-10 rounded-full bg-black/20 flex justify-center items-center backdrop-blur-sm hover:opacity-100 opacity-0 dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon bg-[url('https://rafaelavlucas.github.io/assets/codepen/dribbble.svg')] bg-center bg-no-repeat bg-contain"></span>
        </a>
        <a
          className="absolute w-10 h-10 rounded-full bg-black/20 flex justify-center items-center backdrop-blur-sm hover:opacity-100 opacity-0 linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon bg-[url('https://rafaelavlucas.github.io/assets/codepen/linkedin.svg')] bg-center bg-no-repeat bg-contain"></span>
        </a>
        <div
          className="absolute w-10 h-10 bg-[url('https://rafaelavlucas.github.io/assets/codepen/logo_white.svg')] bg-center bg-no-repeat bg-contain logo"
        ></div>
      </div>

      {/* Navigation */}
      <nav className="w-full h-20 flex justify-between items-center px-10 text-gray-500 uppercase fixed top-0">
        <div className="font-extrabold text-lg">Logo</div>
        <div className="hidden md:flex space-x-5">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Projects</a>
          <a href="#" className="hover:text-white">Team</a>
          <a href="#" className="hover:text-white">Contacts</a>
        </div>
        <div className="block md:hidden w-8 h-8 bg-[url('https://rafaelalucas91.github.io/assets/icons/black/icon-141.svg')] bg-contain bg-no-repeat"></div>
      </nav>

      {/* Main Heading */}
      <header className="flex justify-between items-center max-w-6xl mx-auto py-10 px-5 mt-20">
        <div className="z-10 bg-white/20 backdrop-blur-lg p-10 relative">
          <p className="uppercase font-semibold text-sm text-gray-600">Nature</p>
          <h2 className="uppercase font-light text-4xl text-gray-600 mt-2">Behind the Mountains</h2>
          <p className="text-base leading-6 mt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="mt-8 px-8 py-3 uppercase border border-gray-500 hover:bg-gray-200 hover:-translate-y-1 transition-all">
            Know More
          </button>
        </div>
        <figure className="w-1/2 h-[600px] overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520856707909-75c4048cc858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
            alt="Nature behind the mountains"
          />
        </figure>
      </header>
    </div>
  );
};

export default App;

// Tailwind Config
// Add "@tailwind base; @tailwind components; @tailwind utilities;" to your main CSS file.


import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1431818563807-927945852ab6?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      author: "Paul Gilmore",
    },
    {
      src: "https://images.unsplash.com/photo-1443397646383-16272048780e?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      author: "M. O'Neil",
    },
    {
      src: "https://images.unsplash.com/photo-1442965416224-f6a7eca980fa?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
      author: "N. Mehta",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 font-sans">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">
        Gallery with Hover Effect
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group max-w-xs overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={`Image by ${image.author}`}
              className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-gray-800 font-medium text-lg">
                + {image.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


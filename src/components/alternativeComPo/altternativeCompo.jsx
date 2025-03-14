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

// const Gallery = () => {
//   const images = [
//     {
//       src: "https://images.unsplash.com/photo-1431818563807-927945852ab6?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
//       author: "Paul Gilmore",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1443397646383-16272048780e?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
//       author: "M. O'Neil",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1442965416224-f6a7eca980fa?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
//       author: "N. Mehta",
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 font-sans">
//       <h1 className="text-xl font-semibold text-gray-800 mb-6">
//         Gallery with Hover Effect
//       </h1>
//       <div className="flex flex-wrap justify-center gap-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative group max-w-xs overflow-hidden rounded-lg shadow-lg"
//           >
//             <img
//               src={image.src}
//               alt={`Image by ${image.author}`}
//               className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
//               <p className="text-gray-800 font-medium text-lg">
//                 + {image.author}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;




// image gellaery

// import React from "react";

// const ImageGallery = () => {
//   const images = [
//     {
//       id: 1,
//       src: "https://images.unsplash.com/photo-1601999705946-fbf42c3c6c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Image 1",
//     },
//     {
//       id: 2,
//       src: "https://images.unsplash.com/photo-1566976273017-6e6df9bbdbee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Image 2",
//     },
//     {
//       id: 3,
//       src: "https://images.unsplash.com/photo-1548957175-84f0f9af659e?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Image 3",
//     },
//     {
//       id: 4,
//       src: "https://images.unsplash.com/photo-1722526933541-9a9cdfcdb28f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Image 4",
//     },
//     {
//       id: 5,
//       src: "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Image 5",
//     },
//     {
//       id: 6,
//       src: "https://images.unsplash.com/photo-1732162933719-b618142c1ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Image 6",
//     },
//   ];

//   return (
//     <div className="grid gap-4 lg:gap-6 mt-8">
     
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 ">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className="relative group overflow-hidden "
//           >
//             <img
//               src={image.src}
//               alt={image.text}
//               className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 "
//             />
//             <div className="absolute bottom-0 left-0 right-0 h-screen w-screen bg-gradient-to-t from-purple-500/70  to-blue-600/30  text-white text-center p-2 transform translate-y-full scale-90 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100">
//               {image.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;


// login page demo

{/* <div className="flex items-center justify-center min-h-screen bg-[#080710] relative">
<div className="absolute w-[430px] h-[520px]">
  <div className="absolute w-[200px] h-[200px] bg-gradient-to-b from-[#1845ad] to-[#23a2f6] rounded-full -top-20 -left-20"></div>
  <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-[#ff512f] to-[#f09819] rounded-full -bottom-20 -right-8"></div>
</div>
<div className="relative w-[400px] h-[520px] bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-10 shadow-lg rounded-lg p-10">
  <h3 className="text-2xl font-semibold text-white text-center">Login Here</h3>
  <label className="block mt-6 text-white font-medium">Username</label>
  <input
    type="text"
    placeholder="Email or Phone"
    className="w-full mt-2 p-3 bg-white bg-opacity-10 rounded text-white placeholder-gray-300 outline-none"
  />
  <label className="block mt-6 text-white font-medium">Password</label>
  <input
    type="password"
    placeholder="Password"
    className="w-full mt-2 p-3 bg-white bg-opacity-10 rounded text-white placeholder-gray-300 outline-none"
  />
  <button className="w-full mt-8 py-3 bg-white text-[#080710] font-semibold rounded hover:bg-gray-200 transition">
    Log In
  </button>
  <div className="flex mt-6 space-x-4">
    <div className="flex-1 text-center bg-white bg-opacity-30 p-3 rounded text-white cursor-pointer hover:bg-opacity-50 transition">
      <i className="fab fa-google mr-2"></i>Google
    </div>
    <div className="flex-1 text-center bg-white bg-opacity-30 p-3 rounded text-white cursor-pointer hover:bg-opacity-50 transition">
      <i className="fab fa-facebook mr-2"></i>Facebook
    </div>
  </div>
</div>
</div> */}

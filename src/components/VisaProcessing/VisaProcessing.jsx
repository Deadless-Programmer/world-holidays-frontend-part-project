import { useState } from "react";

const photos = [
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg", name: "Kyoto", visaFee: 2500 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg", name: "Halstatt", visaFee: 3000 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg", name: "Peru", visaFee: 2700 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg", name: "Rio", visaFee: 3200 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg", name: "Italy", visaFee: 2800 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg", name: "Osaka", visaFee: 2600 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg", name: "Bali", visaFee: 2900 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg", name: "Paris", visaFee: 3100 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg", name: "Cusco", visaFee: 2700 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg", name: "Rome", visaFee: 3000 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg", name: "Paris", visaFee: 3300 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg", name: "Bali", visaFee: 2900 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg", name: "Milan", visaFee: 3100 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-budapest.jpg", name: "Budapest", visaFee: 2700 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-vienna.jpg", name: "Vienna", visaFee: 2800 },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-mexico.jpg", name: "Mexico", visaFee: 3200 },
];

const VisaProcessing = () => {
  return (
    <div className="flex flex-wrap max-w-[1300px] mx-auto overflow-hidden">
      {photos.map((photo, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/4 bg-gray-900 border-r-2 border-gray-800 p-2 relative group">
          <div className="transition-transform duration-[60s] ease-in-out hover:pause animate-move-it"> 
            <div className="relative text-right">
              <div className="overflow-hidden relative">
                <img
                  src={photo.src}
                  alt={photo.name}
                  className="w-[90%] transform translate-x-[30%] transition-transform duration-700 ease-in-out hover:-translate-x-[30%] group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-500">
                  <p className="text-white text-lg font-bold">Visa Fee: {photo.visaFee} TK</p>
                </div>
              </div>
              <p className="text-white z-50 uppercase text-2xl font-bold tracking-wide transition-colors duration-500 ease-in-out hover:text-gray-300">
                {photo.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisaProcessing;
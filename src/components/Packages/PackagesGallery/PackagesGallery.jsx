import React from "react";

const PackagesGallery = ({packageHeading1, packageHeading2}) => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1431818563807-927945852ab6?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ Paul Gilmore",
    },
    {
      src: "https://images.unsplash.com/photo-1443397646383-16272048780e?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ M. O' Neil",
    },
    {
      src: "https://images.unsplash.com/photo-1442965416224-f6a7eca980fa?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
      caption: "+ N. Mehta",
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ A. Lee",
    },
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ S. Johnson",
    },
    {
      src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ K. Brown",
    },
    {
      src: "https://images.unsplash.com/photo-1671807217131-0af2d0eba34d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "+ J. Davis",
    },
    {
      src: "https://images.unsplash.com/photo-1659325134732-70f9003ab960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "+ R. Wilson",
    },
    {
      src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ L. Martinez",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ C. Anderson",
    },
    {
      src: "https://images.unsplash.com/photo-1566984991763-91b985a3f9c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "+ P. Thomas",
    },
    {
      src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ B. Taylor",
    },
    {
      src: "https://images.unsplash.com/photo-1586790827142-37a042877dac?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "+ D. Moore",
    },
    {
      src: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ A. Clark",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ K. White",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ S. Harris",
    },
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ N. Martin",
    },
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ A. Thompson",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=",
      caption: "+ C. Garcia",
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  font-sans">
      <h1 className="text-2xl text-gray-800 mb-6 font-playfair md:text-4xl font-semibold mt-16  "> <span className="text-orange-500">{packageHeading1}</span> {packageHeading2}</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-5 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative max-w-[300px] max-h-[200px] overflow-hidden flex justify-center items-center group "
          >
            <img
              src={image.src}
              alt="Gallery"
              className="max-w-full h-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-gray-800 text-sm tracking-wide scale-0 group-hover:scale-100 transition-transform duration-500">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesGallery;

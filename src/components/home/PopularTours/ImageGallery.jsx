import React from "react";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1601999705946-fbf42c3c6c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Maldives ",
    },
    {
      id: 2,
      src: "https://img.freepik.com/free-photo/tourists-taking-photos-beautiful-scenery-skiing-around-deogyusan_335224-426.jpg?t=st=1737725079~exp=1737728679~hmac=35f105a6edf6823ff22212818202f5e9c2e8f2a6aa78715f39d4b802df9a2308&w=996",
      text: "Nepal",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1566976273017-6e6df9bbdbee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Sri-Lanka",
    },
    
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1722526933541-9a9cdfcdb28f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Vietnam",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Indonesia",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1732162933719-b618142c1ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "China",
    },
  ];

  return (
    <div className="grid gap-4 lg:gap-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.text}
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-center p-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
             <h1 className="text-center"> {image.text}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

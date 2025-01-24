import React from 'react';

const Gallery = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden group"
          >
            <figure className="relative h-[400px]">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <figcaption className="absolute bottom-0 left-0 w-full p-4 text-white text-sm bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </div>
  );
};

const galleryItems = [
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Jessica Felicio',
    caption: 'Portrait by Jessica Felicio',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Oladimeji Odunsi',
    caption: 'Portrait by Oladimeji Odunsi',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  {
    link: 'https://unsplash.com/@oladimeg',
    image: 'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait by Alex Perez',
    caption: 'Portrait by Alex Perez',
  },
  // Add additional items as needed
];

export default Gallery;

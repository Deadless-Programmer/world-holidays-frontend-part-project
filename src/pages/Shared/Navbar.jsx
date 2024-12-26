
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold">Brand</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Home
          </Link>
          <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded">
            About
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Services
          </a>
          <Link to="contact" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-lg transform translate-y-0"
          : "bg-transparent transform translate-y-0"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3 lg:px-8">
        <div className="text-lg font-bold">
          <a href="/" className="text-gray-800">
            My Logo
          </a>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="md:hidden bg-blue-500 text-white px-4 py-2 rounded"
          aria-label="Toggle Menu"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

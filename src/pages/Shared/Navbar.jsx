import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed  top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out  ${
        isScrolled
          ? "bg-white text-black  shadow-lg transform translate-y-0"
          : "bg-transparent text-white transform translate-y-0"
      }`}
    >
      <div className="container max-w-6xl mx-auto flex justify-between items-center px-4 py-6 lg:px-8">
        <div className="text-lg font-bold ">
          <a href="/" className="">
            My Logo
          </a>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className=" hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className=" hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#about" className=" hover:text-blue-500">
              Packages
            </a>
          </li>
          <li>
            <a href="#services" className=" hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className=" hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <a href="#contact" className=" hover:text-blue-500">
              Login
            </a>
          </li>
        </ul>
        <button
          className="md:hidden bg-blue-500  px-4 py-2 rounded"
          aria-label="Toggle Menu"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

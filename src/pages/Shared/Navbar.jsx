import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";




const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform ${
        isScrolled
          ? "bg-white text-black shadow-lg opacity-100 translate-y-0"
          : "bg-transparent text-white opacity-90 pt-4 -translate-y-3"
      }`}
    >
      <div className="container max-w-7xl mx-auto  flex justify-between items-center px-4 py-6 lg:px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
        {isScrolled ? <img className="w-22 h-10" src='https://i.postimg.cc/w3K0SWMK/artboard-loog-01.png' alt="" />
        : <img className="w-22 h-10" src='https://i.postimg.cc/d0mPnyWt/artboard-loog.png' alt="" /> }
        
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-orange-500 transition-colors font-nunito ">
              Home
            </Link >
          </li>
          <li>
            <Link  to="/about-us" className="hover:text-orange-500 transition-colors font-nunito">
              About Us
            </Link >
          </li>
          <li>
            <Link 
              to="/packages"
              className="hover:text-orange-500 transition-colors font-nunito"
            >
              Packages
            </Link >
          </li>
          <li>
            <Link 
              to="/services"
              className="hover:text-orange-500 transition-colors font-nunito"
            >
              Services
            </Link >
          </li>
          <li>
            <Link 
              to="/contact"
              className="hover:text-orange-500 transition-colors font-nunito"
            >
              Contact
            </Link >
          </li>
          <li>
            <Link  to="/signInUpForm" className="hover:text-orange-500 transition-colors font-nunito">
              Login
            </Link >
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <span
          className="md:hidden  text-lg py-2 "
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose/> : <AiOutlineMenu />}
        </span>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-[104PX] left-0 w-full bg-white text-black shadow-lg transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 max-h-screen"
            : "opacity-0 -translate-y-10 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link  to="#home" className="hover:text-orange-500 font-nunito " onClick={toggleMenu}>
              Home
            </Link >
          </li>
          <li>
            <Link 
              to="/about-us"
              className="hover:text-orange-500 font-nunito"
              onClick={toggleMenu}
            >
              About Us
            </Link >
          </li>
          <li>
            <Link 
              to="/packages"
              className="hover:text-orange-500 font-nunito"
              onClick={toggleMenu}
            >
              Packages
            </Link >
          </li>
          <li>
            <Link 
              to="/services"
              className="hover:text-orange-500 font-nunito"
              onClick={toggleMenu}
            >
              Services
            </Link >
          </li>
          <li>
            <Link 
              to="/contact"
              className="hover:text-orange-500 font-nunito"
              onClick={toggleMenu}
            >
              Contact
            </Link >
          </li>
          <li>
            <Link 
              to="/signInUpForm"
              className="hover:text-orange-500 font-nunito"
              onClick={toggleMenu}
            >
              Login
            </Link >
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

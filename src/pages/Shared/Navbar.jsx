import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";




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
      <div className="container max-w-6xl mx-auto  flex justify-between items-center px-4 py-6 lg:px-8">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="/" className="">
           Logo
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-orange-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#packages"
              className="hover:text-orange-500 transition-colors"
            >
              Packages
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-orange-500 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#login" className="hover:text-orange-500 transition-colors">
              Login
            </a>
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
        className={`md:hidden fixed top-20 left-0 w-full bg-white text-black shadow-lg transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 max-h-screen"
            : "opacity-0 -translate-y-10 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="#home" className="hover:text-orange-500" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-orange-500"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#packages"
              className="hover:text-orange-500"
              onClick={toggleMenu}
            >
              Packages
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-orange-500"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-500"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#login"
              className="hover:text-orange-500"
              onClick={toggleMenu}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

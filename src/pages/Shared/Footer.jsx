import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  md:p-10   bg-gray-50  mt-6 ">
      <div className=" container shadow-md  max-w-7xl mx-auto pt-5  pb-10 pr-10 pl-6 grid grid-cols-1 md:grid-cols-4 gap-9 md:justify-items-center md:items-start">
        <div className=" ">
          <img
            className="h-12 "
            src="https://i.postimg.cc/TwYXZn0T/Logo-World-holidays.png"
            alt=""
          />
          <h2 className="mt-4 text-sm font-extralight  leading-relaxed">
            Antara (Irving Properties) : 4th Floor (4A), House 57, Road 04, Block
            C, Banani, Dhaka-1213, Bangladesh
          </h2>
        </div>
        <div className="space-y-1 flex flex-col">
          <Link to="/about-us" className="text-xl ">
            About
          </Link>
          <Link to="/term-&-condition">Terms and Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className=" space-y-1 flex flex-col">
          <Link to="/contact" className="text-xl">
            Help
          </Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/easy-emi">Easy EMI</Link>
          <Link to="/payment-method">Payment Methods</Link>
          <Link to="/faqs-World-Holidays">FAQS</Link>
        </div>
        <div className=" space-y-1">
          <h1 className="text-xl">Have an any Query ?</h1>
          <p className="text-orange-500">+88 0197 0500186-95</p>
          <p className="text-orange-500">+88 0195 5571083-84</p>
          <p className="text-orange-500">www.worldholidaysbd.com</p>
          <p className="font-semibold">Dedicated Customer Support : 24/7</p>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto   border-t border-b   pt-5 pb-5 pr-10 pl-6">
        <div className=" max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4  place-items-center items-start gap-4 sm:gap-0">
          <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-slate-500 font-medium">Accredited Member</h2>
            <img
              className="h-20"
              src="https://www.iata.org/contentassets/3e83770142a040d688e269bb2f709b7b/iata-logo-header.svg?height=127&rmode=crop&v=20240116100112"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-slate-500 font-medium">Member Of</h2>
            <img
              className="h-16 w-full"
              src="https://i.postimg.cc/yYSWtKhc/atab.jpg"
              alt="Atab logo"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-slate-500 font-medium">Registered By</h2>
            <img
              className="h-16"
              src="https://i.postimg.cc/L594738B/pngegg.png"
              alt="Civil aviation authority logo"
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-slate-500 font-medium">Member Of</h2>
            <img
              className="h-16"
              src="https://i.postimg.cc/xdVfWbjS/toab-logo.jpg"
              alt="Taob logo"
            />
          </div>
        </div>
      </div>

      <p className="text-center font-medium py-4 text-slate-600">
        &copy; Copyright @2016 All rights reserved by World Holidays
      </p>
    </footer>
  );
};

export default Footer;

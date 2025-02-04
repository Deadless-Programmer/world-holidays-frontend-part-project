import React from "react";

const Footer = () => {
  return (
    <footer className="  md:p-10     mt-6 ">
      <div className=" container  max-w-7xl mx-auto  pb-10 pr-10 pl-6 grid grid-cols-1 md:grid-cols-4 gap-9 md:justify-items-center md:items-start">
        <div className=" ">
          <img
            className="h-12 "
            src="https://i.postimg.cc/TwYXZn0T/Logo-World-holidays.png"
            alt=""
          />
          <h2 className="mt-4 text-sm font-extralight text-orange-500  leading-relaxed">
           World Holidays Antara (Irving Properties) 4th Floor (4A), House 57,
            Road 04 Block C, Banani, Dhaka-1213,Bangladesh.
          </h2>
        </div>
        <div className="space-y-1">
          <h1 className="text-xl ">About</h1>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Blog</p>
        </div>
        <div className=" space-y-1">
          <h1 className="text-xl">Help</h1>
          <p>Contact Us</p>
          <p>Easy EMI</p>
          <p>Payment Methods</p>
          <p>FAQS</p>
        </div>
        <div className=" space-y-1">
          <h1 className="text-xl">Have an any Query ?</h1>
          <p className="text-orange-500">+88 0197 0500188-95</p>
          <p className="text-orange-500">www.worldholidaysbd.com</p>
          <p className="font-semibold">Dedicated Customer Support : 24/7</p>
        </div>
     
      </div>
      <div className="container max-w-7xl mx-auto  border-t border-b   pt-5 pb-5 pr-10 pl-6">
  <div className=" max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4  place-items-center items-start gap-4 sm:gap-0">
    <div className="flex flex-col justify-center items-center gap-1">
      <h2 className="text-slate-500 font-medium">Accredited Member</h2>
      <img className="h-20" src="https://www.iata.org/contentassets/3e83770142a040d688e269bb2f709b7b/iata-logo-header.svg?height=127&rmode=crop&v=20240116100112" alt="" />
    </div>
    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-slate-500 font-medium">Member Of</h2>
      <img className="h-10 w-full" src="https://www.atab.org.bd/public/uploads/backend/company/Gvg8h1683349761-logo.png" alt="" />
    </div>
    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-slate-500 font-medium">Registered By</h2>
      <img className="h-16" src="https://ops.caab.gov.bd/contact/8813212981692679801Logo.png" alt="" />
    </div>

    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-slate-500 font-medium">Member Of</h2>
      <img className="h-16" src="https://www.toab.org/public/assets/frontend/images/logo.png" alt="" />
    </div>
    
  </div>
</div>

      <p className="text-center font-medium py-4 text-slate-600">&copy; Copyright @2016  All rights reserved by World Holidays</p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-indigo-950   mt-24 ">
      <div className="text-white container max-w-7xl mx-auto pt-10 pb-10 pr-10 pl-6 flex justify-between items-center">
        <div className="">
          <img
            className="h-16"
            src="https://i.postimg.cc/TwYXZn0T/Logo-World-holidays.png"
            alt=""
          />
          <h2>
            𝐖𝐨𝐫𝐥𝐝 𝐇𝐨𝐥𝐢𝐝𝐚𝐲𝐬 Antara (Irving Properties) 4th Floor (4A), House 57,
            Road 04 Block C, Banani, Dhaka-1213, Bangladesh.
          </h2>
        </div>
        <div>
          <h1>About</h1>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Blog</p>
        </div>
        <div>
          <h1>Help</h1>
          <p>Contact Us</p>
          <p>Easy EMI</p>
          <p>Payment Methods</p>
          <p>FAQS</p>
        </div>
        <div>
          <h1>Have an any Query</h1>
          <p>+88 0197 0500188-95</p>
          <p>www.worldholidaysbd.com</p>
          <p>Dedicated Customer Support : 24/7</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

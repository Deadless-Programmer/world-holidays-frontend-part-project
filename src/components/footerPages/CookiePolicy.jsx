// CookiePolicy.jsx
import React from "react";
import ScrollToTop from "../utils/ScrollToTop";

const cookieSections = [
  {
    title: "1. What Are Cookies?",
    content:
      "Cookies are small files placed on your device to enhance browsing experience, remember preferences, and track user behavior."
  },
  {
    title: "2. Types of Cookies We Use",
    content: `a. Essential Cookies – Needed for core functionality.\n
b. Performance & Analytics – Help us measure and improve performance.\n
c. Functional Cookies – Store preferences and past searches.\n
d. Marketing Cookies – Track interactions and deliver personalized ads.`
  },
  {
    title: "3. Third-Party Cookies",
    content:
      "We may use services like Google Analytics or YouTube that set their own cookies. These are governed by their own privacy policies."
  },
  {
    title: "4. How to Manage Cookies",
    content:
      "You can disable cookies in your browser settings. Note that doing so may affect website functionality."
  },
  {
    title: "5. Consent",
    content:
      "By using our site, you consent to the use of cookies. A banner may appear on your first visit allowing you to set preferences."
  },
  {
    title: "6. Updates to This Policy",
    content:
      "We may update this policy periodically. The latest version will always be available on this page."
  },
  {
    title: "7. Contact Us",
    content:
      "If you have questions, email us at zamanworldholidays@yahoo.com or call us at +88 0197 0500188-95"
  },
];

const CookiePolicy = () => {
  return (

    <>
     <ScrollToTop />
    <div className="max-w-5xl mx-auto px-4 py-10 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-600">
        Cookie Policy
      </h1>
      <div className="space-y-6">
        {cookieSections.map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
            <p className="mt-2 text-gray-600 whitespace-pre-line">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CookiePolicy;

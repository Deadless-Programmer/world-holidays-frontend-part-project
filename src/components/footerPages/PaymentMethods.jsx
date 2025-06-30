// PaymentMethods.jsx
import React from 'react';
import { FaCreditCard } from 'react-icons/fa'; // Bank icon (Credit Card)
import { FaMobileAlt } from 'react-icons/fa';  // bKash / Mobile icon
import { FaWallet } from 'react-icons/fa'; // Nogod / Wallet icon
import ScrollToTop from '../utils/ScrollToTop';

const PaymentMethods = () => {
  return (
    <>
     <ScrollToTop />
    <div className="max-w-2xl mx-auto px-4 py-10 bg-gray-50  shadow-lg mt-32">
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-6">
        Payment Methods for Easy Transactions
      </h2>

      <p className="text-lg text-center text-gray-700 mb-6">
        Choose from our secure and convenient payment options to confirm your booking.
      </p>

      <div className="space-y-6">
        {/* Bank Transfer Card */}
        <div className="flex items-center p-4  shadow-md border bg-white border-gray-300">
          <FaCreditCard className="w-10 h-10 mr-4 text-teal-600" />
          <div>
            <h3 className="text-xl text-gray-800 font-semibold">Bank Transfer</h3>
            <p className="text-gray-600">Transfer funds directly from your bank account for a secure payment method.</p>
          </div>
        </div>

        {/* bKash Card */}
        <div className="flex items-center p-4  shadow-md border bg-white border-gray-300">
          <FaMobileAlt className="w-10 h-10 mr-4 text-teal-600" />
          <div>
            <h3 className="text-xl text-gray-800 font-semibold">bKash</h3>
            <p className="text-gray-600">Use your mobile phone to make secure payments via the bKash app, widely popular in Bangladesh.</p>
          </div>
        </div>

        {/* Nogod Card */}
        <div className="flex items-center p-4  shadow-md border bg-white border-gray-300">
          <FaWallet className="w-10 h-10 mr-4 text-teal-600" />
          <div>
            <h3 className="text-xl text-gray-800 font-semibold">Nogod</h3>
            <p className="text-gray-600">Make quick and secure payments using your Nogod mobile wallet, an easy solution for online transactions.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentMethods;

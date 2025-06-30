// EasyEMI.jsx
import React, { useState } from 'react';
import ScrollToTop from '../utils/ScrollToTop';

const EasyEMI = () => {
  const [price, setPrice] = useState(100000); // Default travel package price
  const [tenure, setTenure] = useState(6); // Default EMI tenure in months
  const [interestRate, setInterestRate] = useState(10); // Default interest rate
  const [emi, setEmi] = useState(0); // EMI result

  // Calculate EMI based on price, tenure, and interest rate
  const calculateEMI = () => {
    const principal = price;
    const rateOfInterest = interestRate / 100 / 12;
    const numberOfInstallments = tenure;

    const emiAmount = (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfInstallments)) /
      (Math.pow(1 + rateOfInterest, numberOfInstallments) - 1);

    setEmi(emiAmount.toFixed(2));
  };

  return (
    <>
     <ScrollToTop />
    <div className="max-w-3xl mx-auto px-4 py-10 bg-gray-50 rounded-xl shadow-lg mt-36">
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-6">
        Easy EMI for Your Dream Trip
      </h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium">
            Travel Package Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-2 p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="tenure" className="block text-gray-700 font-medium">
            Tenure (in months)
          </label>
          <input
            type="number"
            id="tenure"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full mt-2 p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-gray-700 font-medium">
            Interest Rate (annual %)
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full mt-2 p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            min="0"
          />
        </div>

        <div className="mt-4">
          <button
            onClick={calculateEMI}
            className="w-full py-2 px-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Calculate EMI
          </button>
        </div>

        {emi > 0 && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-teal-600">Your EMI Amount:</h3>
            <p className="text-3xl font-bold text-teal-800">{` ${emi} tk`}</p>
            <p className="text-gray-600">For a tenure of {tenure} months</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default EasyEMI;

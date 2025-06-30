import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ScrollToTop from '../utils/ScrollToTop';

const faqs = [
  {
    question: "What services does World Holidays offer?",
    answer:
      "World Holidays offers inbound and outbound tour packages, visa and ticket processing, star cruises, hotel bookings (domestic and international), and customer consultation with a focus on excellence and satisfaction.",
  },
  {
    question: "How can I book a trip with World Holidays?",
    answer:
      "You can contact us directly through phone, email, or visit our office. You may also book through our website by selecting your preferred package and filling in the necessary details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Bank Transfer, bKash, and Nogod to ensure convenience and flexibility for our clients.",
  },
  {
    question: "Do you offer installment or EMI payment options?",
    answer:
      "Yes, we offer easy EMI options. Please contact our team for details about eligibility and payment plans.",
  },
  {
    question: "Is World Holidays IATA authorized?",
    answer:
      "Yes, we are an IATA authorized travel agency, which assures that we meet international travel industry standards.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Absolutely. We provide tailor-made packages based on your travel interests, budget, and preferences.",
  },
];

const FaqsWorldHolidays = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <ScrollToTop />
    <div className="max-w-3xl mx-auto p-6 mt-32">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md  transition-all duration-300 overflow-hidden border"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-teal-600" />
              ) : (
                <FaChevronDown className="text-gray-400" />
              )}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out px-4 overflow-hidden ${
                openIndex === index ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FaqsWorldHolidays;

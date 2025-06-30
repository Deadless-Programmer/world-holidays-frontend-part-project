// TermsAndConditions.jsx
import React from "react";
import ScrollToTop from "../utils/ScrollToTop";

const terms = [
  {
    title: "Booking and Payments",
    description:
      "All bookings must be made through official World Holidays channels. A minimum deposit is required at the time of booking. Full payment must be completed before departure."
  },
  {
    title: "Cancellation Policy",
    description:
      "Cancellation must be made in writing. Charges apply depending on the days prior to departure. Less than 14 days: no refund."
  },
  {
    title: "Changes by Client",
    description:
      "Changes after booking may incur fees and are subject to availability. All requests must be made in writing."
  },
  {
    title: "Changes by World Holidays",
    description:
      "We reserve the right to modify plans due to uncontrollable circumstances. Alternatives or refunds will be offered."
  },
  {
    title: "Travel Documents",
    description:
      "Clients are responsible for valid travel documents. Visa assistance is provided but not guaranteed."
  },
  {
    title: "Travel Insurance",
    description:
      "Highly recommended. We are not liable for losses due to illness, injury, or delays."
  },
  {
    title: "Liability",
    description:
      "We act as an agent and are not responsible for third-party providers’ issues."
  },
  {
    title: "Conduct",
    description:
      "Clients must behave respectfully. We reserve the right to remove disruptive individuals."
  },
  {
    title: "Privacy Policy",
    description:
      "We respect your privacy and will not share information without your consent."
  },
  {
    title: "Governing Law",
    description:
      "These terms follow the laws of Bangladesh."
  },
];

const TermsAndConditions = () => {
  return (
    <>
     <ScrollToTop />
    <div className="max-w-5xl mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Terms & Conditions
      </h1>
      <div className="space-y-6">
        {terms.map((term, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{term.title}</h2>
            <p className="mt-2 text-gray-600">{term.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TermsAndConditions;

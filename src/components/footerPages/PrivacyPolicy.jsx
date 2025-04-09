import React from "react";

const policySections = [
  {
    title: "1. Information We Collect",
    content: `We collect personal details such as your name, email, phone number, passport and visa information, travel preferences, and payment data to provide travel services effectively.`
  },
  {
    title: "2. How We Use Your Information",
    content: `We use your data to process bookings, tailor your travel experiences, communicate updates, improve our services, and fulfill legal obligations.`
  },
  {
    title: "3. How We Share Your Information",
    content: `Your data may be shared with travel partners (like airlines or hotels), visa agencies, and payment processors, but never sold or rented to any third party.`
  },
  {
    title: "4. Data Security",
    content: `We use encryption, firewalls, and secure systems to protect your information against unauthorized access and ensure confidentiality.`
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: `Cookies help us improve site usability, remember your preferences, and understand how users interact with our website. You can disable cookies in your browser settings.`
  },
  {
    title: "6. Your Rights",
    content: `You may request access to, correct, or delete your data at any time. Please contact us at privacy@worldholidays.com.bd for any privacy-related requests.`
  },
  {
    title: "7. Third-Party Links",
    content: `Our site may include links to external websites. We are not responsible for their privacy practices or content.`
  },
  {
    title: "8. Children’s Privacy",
    content: `We do not knowingly collect data from children under 13. If you believe we have, please notify us for removal.`
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this policy from time to time. The latest version will always be posted here with an updated effective date.`
  },
  {
    title: "10. Contact Us",
    content: `For questions, email us at zamanworldholidays@yahoo.com or call us at +88 0197 0500188-95`
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">
        Privacy Policy
      </h1>
      <div className="space-y-6">
        {policySections.map((section, index) => (
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
  );
};

export default PrivacyPolicy;

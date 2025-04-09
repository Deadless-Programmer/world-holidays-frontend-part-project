// BlogAccordion.jsx
import React, { useState } from 'react';

const blogPosts = [
  {
    title: "Exploring the Best of Kathmandu – A Traveler's Guide",
    excerpt: "Kathmandu, Nepal, is a city full of history, culture, and adventure. Discover the best things to do and places to visit on your trip.",
    content: `Kathmandu, the vibrant capital of Nepal, is a unique blend of ancient temples, historical landmarks, and scenic beauty. When visiting Kathmandu, explore UNESCO World Heritage Sites like Swayambhunath Stupa (Monkey Temple), Pashupatinath Temple, and Boudhanath Stupa. Also, don't miss the bustling Thamel district for local shopping, food, and cultural experiences. For nature lovers, a trip to Nagarkot for a sunrise view of the Himalayas is a must. Kathmandu offers something for everyone – from history buffs to adventure seekers.`
  },
  {
    title: "How to Plan Your Dream Vacation with World Holidays",
    excerpt: "Planning your dream vacation has never been easier! Learn how World Holidays helps you create the perfect itinerary.",
    content: `Planning a dream vacation with World Holidays is easy and hassle-free. Our experienced consultants work with you to customize an itinerary based on your interests, budget, and travel preferences. Whether you’re looking for a luxurious beach holiday or an adventurous trek, we offer a range of options. We help with everything from booking flights and accommodations to securing visas and arranging transfers. Our travel experts will provide recommendations for the best tours and activities, ensuring you have a memorable vacation from start to finish.`
  },
  {
    title: "Top 10 Tips for First-Time Travelers",
    excerpt: "Traveling for the first time? These essential tips will help you navigate the world of travel with ease and confidence.",
    content: `1. Plan Ahead: Book your flights, hotels, and tours in advance to get the best deals.
    2. Pack Smart: Pack light and include essential items like a power bank, comfortable shoes, and a travel adapter.
    3. Stay Informed: Learn basic local phrases (like “hello” and “thank you”) and understand cultural customs.
    4. Keep Documents Safe: Make copies of your passport, tickets, and important documents.
    5. Use Travel Apps: Download apps for navigation, currency conversion, and language translation.
    6. Health & Safety: Always have travel insurance, and check for any vaccinations needed for the destination.
    7. Know Your Budget: Stick to your budget by planning meals, activities, and transportation ahead of time.
    8. Money Matters: Carry a mix of local currency and cards, and be aware of any foreign transaction fees.
    9. Don’t Overpack: Leave room for souvenirs, and avoid carrying too much luggage.
    10. Enjoy the Moment: Immerse yourself in the local culture, and take the time to relax and enjoy your trip.`
  },
  {
    title: "How to Save Money on International Travel",
    excerpt: "Discover how to stretch your travel budget with expert tips on finding the best deals on flights, accommodation, and activities.",
    content: `1. Book Flights Early: Airfare is often cheaper when booked several months in advance.
    2. Use Price Alerts: Set alerts on flight comparison websites (like Skyscanner or Google Flights) to monitor price drops.
    3. Travel in Off-Peak Season: Avoid the crowds and save money by traveling during the off-peak season.
    4. Use Public Transportation: Instead of taxis, use buses or trains to get around.
    5. Stay in Budget Accommodations: Consider hostels, guesthouses, or Airbnb instead of luxury hotels.
    6. Cook Your Own Meals: Save money by buying groceries and preparing meals in your accommodation.
    7. Seek Free Activities: Look for free walking tours, museums, or public parks.
    8. Avoid Foreign Exchange Fees: Use a credit card that doesn’t charge foreign transaction fees or exchange money at local ATMs.
    9. Book Tours in Advance: Pre-booking tours can often save you money compared to last-minute booking.
    10. Pack Light: Avoid baggage fees by packing light and sticking to carry-on luggage.`
  },
  {
    title: "The World Holidays Experience – Customer Stories",
    excerpt: "Read about the unforgettable journeys and positive experiences shared by our valued customers from around the world.",
    content: `Our customers continue to share positive experiences about their unforgettable vacations. From honeymooners who explored the stunning beaches of the Maldives to solo travelers who trekked through the serene landscapes of Bhutan, our clients have shared how our personalized services made their trips exceptional. Many have praised the seamless booking process, attention to detail, and the extensive knowledge of our travel consultants.`
  }
];

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close the current card if it's already open
    } else {
      setExpandedIndex(index); // Open the clicked card
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">Our Blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md  border border-gray-200">
            <div
              className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-100"
              onClick={() => handleAccordionToggle(index)}
            >
              <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
              <span className="text-gray-500">
                {expandedIndex === index ? '-' : '+'}
              </span>
            </div>
            <div
              className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                expandedIndex === index ? 'max-h-screen opacity-100 transform scale-100' : 'max-h-0 opacity-0 transform scale-95'
              }`}
            >
              {expandedIndex === index && (
                <div className="px-6 py-4 text-gray-700 text-lg">
                  <p>{post.content}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

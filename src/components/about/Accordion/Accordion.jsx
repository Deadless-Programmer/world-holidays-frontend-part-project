import React, { useState } from "react";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoArrowDownCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const accordionData = [
    {
      id: 1,
      title: "World Holidays",
      
      content: "World Holidays is a IATA authorized reputed name in the field of tourism industry in Bangladesh since 2016, that arranges an “exclusively top in class” customer experience with the objective to be worldwide best travel planner. The founder of World Holidays is a 100% tourism professional with knowledge in most of the destinations and services in the world for people to enjoy. We are the pioneer and specialized in the field of inbound and outbound tour packages, visa and ticket processing, star cruise, domestic and international hotel booking worldwide services. Our alldepartment works independently to provide best services to our customers & clients and one of the best travel agency in Bangladesh, focusing has all the ingredients to satisfy our clients and help us become the best tour operator in Bangladesh. on creating friendship and a long lasting relationship with our beloved clients. Our clients still prefer us as we provide the best flight rates, exclusive hotel deals and a wide range of options for your accommodations and travel plans. We can proudly say that we look into every single detail of your trip, to ensure each sector Moreover, World Holidays is also pleased and appreciative to the staff and personnel who are considered teammates of this company thus helping the staff to upgrade their skills through continuous formal and hands-on training and seminars towards achieving total customer satisfaction and well-being. They have the experience and professionalism to understand your travel needs and fulfil them effortlessly within a short time. Their full dedication helps us to become the best travel agency in Bangladesh.",
    },
    {
      id: 2,
      title: "VISION",
     
      content: "To dominate the tourism industry by excellence in service with innovation & creative concepts in the global marketplace free citation generator for our clients that will help us achieve the title of best travel agency in Bangladesh.",
    },
    {
      id: 3,
      title: "MISSION",
      
      content: "Our mission to provide extraordinary eminence services in the tourism and hospitality industry, well timed and professionally with efficiency. World Holidays assisting people and companies travel smooth and accomplish more with all friendly environments.",
    },
    {
      id: 4,
      title: " SERVICE",
     
      content: " Professional customer consultation providing hassle free travel and journey. Creative but determined approach to search for the most appropriate travel arrangements and accommodations and identifying the best possible values. Our travel consultants are friendly, polite, professional, and experienced in accommodating both the seasoned traveler and those who are new to the world of travel.",
    },
    {
      id: 5,
      title: " VALUES",
     
      content: "  * Direct and open communication * Speedy process * Teamwork * Flexibility and willingness to accept change * Recognizing and learning from mistakes * Risk-taking * Quality care.",
    },
    {
      id: 6,
      title: "OUR TRIPS",
     
      content: " Our trips are carefully mastered to combine the cultural and natural riches with comfort, safety, luxury and adventure to create trips that will have our guests talking for a long time. We have four key components; discovery, value, pace, and choice.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto my-20  flex items-center justify-center">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="space-y-4">
          {accordionData.map((item) => (
            <div
              key={item.id}
              className=" border border-gray-600"
            >
              <button
                onClick={() => handleAccordionToggle(item.id)}
                className="flex justify-between items-center w-full p-4 text-left  hover:text-orange-500"
              >
                <div className="flex flex-col">
                  <h3 className="font-medium text-lg font-nunito">{item.title}</h3>
                  
                </div>
                <div className="text-xl ">
                  {activeAccordion === item.id ? (
                   <IoArrowDownCircleOutline />
                   
                  ) : (
                    <IoArrowForwardCircleOutline />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-700 ${
                  activeAccordion === item.id ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="overflow-y-auto h-36 text-base p-4 font-nunito">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

import React, { useState } from "react";
import PageHeader from "../PageHeader/PageHeader";
import { FaChevronDown, FaUsers } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";


const TicketDetails = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [selected, setSelected] = useState("one-way");
    const handleChange = (event) => {
      setSelectedOption(event.target.value); // Update the state with the selected value
    };

    const [showTravelers, setShowTravelers] = useState(false);
  const [showEconomy, setShowEconomy] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const [economy, setEconomy] = useState("Economy");

  const totalTravelers =
    travelers.adults + travelers.children + travelers.kids + travelers.infants;

    const handleTravelerCount = (type, increment) => {
        setTravelers((prev) => ({
          ...prev,
          [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
        }));
      };
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission
    //   alert(`Selected option: ${selectedOption}`);
    console.log(selectedOption)
    };

  return (
    <div>
      <PageHeader
        heading={"Discover Cheap Flights and Airline Tickets in Bangladesh!"}
        paragraph={"Where to Fly?"}
        bgImage={
          "https://images.pexels.com/photos/316794/pexels-photo-316794.jpeg"
        }
      />
     
    <div className=" max-w-6xl md:h-36 bg-white mx-auto shadow-2xl p-4 mt-10">
    
    {/* top content */}
    <div className="md:flex justify-between">

     {/* top left */}
    <div className="flex gap-2 ">
      {/* One-way Button */}
      <button
        className={`flex items-center justify-center gap-2 p-2 w-28  transition-colors ${
  selected === "one-way" ? "bg-orange-500 text-white" : "bg-slate-100 text-black"
        }`}
        onClick={() => setSelected("one-way")}
      >
        <input
          className="hidden"
          type="radio"
          name="radio-1"
          value="one-way"
          checked={selected === "one-way"}
          readOnly
        />
        <p className="font-nunito font-bold">One-way</p>
      </button>

      {/* Round-trip Button */}
      <button
        className={`flex items-center gap-2 p-2 w-28  transition-colors ${
  selected === "round-trip" ? "bg-orange-500 text-white" : "bg-slate-100 text-black"
        }`}
        onClick={() => setSelected("round-trip")}
      >
        <input
          className="hidden"
          type="radio"
          name="radio-1"
          value="round-trip"
          checked={selected === "round-trip"}
          readOnly
        />
        <p className="font-nunito font-bold">Round-trip</p>
      </button>
      {/* Multi-city Button */}
      <button
        className={`flex items-center justify-center gap-2 p-2 w-28   transition-colors ${
  selected === "multi city" ? "bg-orange-500 text-white" : "bg-slate-100 text-black"
        }`}
        onClick={() => setSelected("multi city")}
      >
        <input
          className="hidden"
          type="radio"
          name="radio-1"
          value="multi city"
          checked={selected === "multi city"}
          readOnly
        />
        <p className="font-nunito font-bold">Multi city</p>
      </button>
    </div>
     
     {/* right top */}

     <div className="md:flex gap-2 mt-2 md:mt-0 ">
      {/* Travelers Dropdown */}
      <div className="relative ">
        <button
          className="flex items-center justify-between  px-4 py-2 w-full md:w-52 bg-gray-100  shadow-sm hover:bg-gray-200"
          onClick={() => setShowTravelers(!showTravelers)}
        >
          <div className="flex items-center  space-x-2">
            <FaUsers />
            <span>{totalTravelers} Travelers</span>
          </div>
          <FaChevronDown />
        </button>

        {showTravelers && (
          <div className="absolute z-10 bg-white border w-full md:w-52 shadow-lg mt-2 p-4 space-y-4">
            {Object.keys(travelers).map((type) => (
              <div
                key={type}
                className="flex items-center justify-between text-sm"
              >
                <span className="capitalize">{type}</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleTravelerCount(type, false)}
                  >
                    -
                  </button>
                  <span>{travelers[type]}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleTravelerCount(type, true)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <button
              className="w-full py-2 bg-orange-500 text-white  hover:bg-blue-900"
              onClick={() => setShowTravelers(false)}
            >
              Set Travelers
            </button>
          </div>
        )}
      </div>

      {/* Economy Dropdown */}
      <div className="relative mt-2 md:mt-0 ">
        <button
          className="flex items-center justify-between w-full  md:w-52  px-4 py-2 bg-gray-100 shadow-sm hover:bg-gray-200"
          onClick={() => setShowEconomy(!showEconomy)}
        >
          <span>{economy}</span>
          <FaChevronDown />
        </button>

        {showEconomy && (
          <div className="absolute z-10 md:w-52 w-full  bg-white border  shadow-lg mt-2 p-4 space-y-2">
            {["Economy", "Premium Economy", "Business", "First Class"].map(
              (option) => (
                <button
                  key={option}
                  className={`w-[172px]  text-left px-4 py-2  hover:bg-gray-200 ${
                    economy === option ? "bg-gray-100 font-bold" : ""
                  }`}
                  onClick={() => {
                    setEconomy(option);
                    setShowEconomy(false);
                  }}
                >
                  {option}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
    </div>
    {/* search bar */}
    <div className="md:flex items-center gap-2 justify-center mt-6">
       <input type="text" className="px-3 py-2 md:w-64 w-full outline-none border border-orange-500" name="" placeholder="your name" id="" />
       <input type="text" className="px-3 py-2 md:w-64 w-full mt-2 md:mt-0 outline-none border border-orange-500" name="" placeholder="from" id="" />
       <input type="text" className="px-3 py-2 md:w-64 w-full mt-2 md:mt-0 outline-none border border-orange-500" name="" placeholder="to" id="" />
        <button className="border px-3 py-2 text-center mt-2 md:mt-0  bg-orange-500  hover:text-white font-nunito  flex justify-between items-center">
                       Book <IoIosArrowRoundForward className="text-2xl" />{" "}
                     </button>
    </div>
    </div>
    </div>
  );
};

export default TicketDetails;

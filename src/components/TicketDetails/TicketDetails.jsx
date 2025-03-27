import React, { useState } from "react";
import PageHeader from "../PageHeader/PageHeader";
import { FaChevronDown, FaUsers } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlArrowRightCircle } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTicketCart from "../../hooks/useTicketCart";
import Swal from "sweetalert2";

const TicketDetails = () => {
  const [selected, setSelected] = useState("one-way");
  const [showTravelers, setShowTravelers] = useState(false);
  const [showEconomy, setShowEconomy] = useState(false);
  const { user } = useAuth();
  const axiosSecure =useAxiosSecure();
  const [,refetch]=useTicketCart();
  // const { id } = useParams();
  const navigate = useNavigate();
  const location_path = useLocation();
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const [economy, setEconomy] = useState("Economy");
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    to: "",
  });

  const totalTravelers =
    travelers.adults + travelers.children + travelers.kids + travelers.infants;

  const handleTravelerCount = (type, increment) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Form Data:", formData);
    // console.log("Travelers:", travelers);
    // console.log("Trip Type:", selected);
    // console.log("Class:", economy);

    const flightInfo = {
      formData, travelers, selected, economy
    };

   if (user && user.email) {
         const cartItem = {
          flightInfo,
           email: user.email,
           name: user?.displayName,
           
   
          
         }; 
        //  console.log(cartItem);
         axiosSecure.post('/ticket_cart',cartItem ).then(res=>{
         if(res.data.insertedId){
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: "Ticket  has been Added",
             showConfirmButton: false,
             timer: 1500
           });
         }
   
         refetch();
        })
       }
   
       else {
         Swal.fire({
           title: "You are not logged in",
           text: "Please login to book the tour",
           icon: "warning",
           showCancelButton: true,
           confirmButtonText: "Login",
         }).then((result) => {
           if (result.isConfirmed) {
             navigate("/signInUpForm", { state: { from: location_path } });
           }
         });
       }
  };

  return (
    <div className="relative">
      <PageHeader
        heading={"Discover Cheap Flights and Airline Tickets!"}
        paragraph={"Where to Fly?"}
        bgImage={"https://images.pexels.com/photos/316794/pexels-photo-316794.jpeg"}
      />

<div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-3xl font-nunito font-bold text-white   w-60   ">
        <Link className=" -mt-32 md:-mt-0 text-white border p-2 text-lg hover:border-orange-500 hover:text-orange-500 font-semibold flex items-center justify-center gap-2 ">
          Explore Routes{" "}
          <span>
            <SlArrowRightCircle />
          </span>
        </Link>
      </div>

      <div className="max-w-6xl md:h-36 bg-white mx-auto shadow-2xl p-4 mt-10">
        {/* Top Content */}
        <div className="md:flex justify-between">
          {/* Trip Type Selection */}
          <div className="flex gap-2">
            {["one-way", "round-trip", "multi city"].map((option) => (
              <button
                key={option}
                className={`flex items-center justify-center gap-2 p-2 w-28 transition-colors ${
                  selected === option ? "bg-orange-500 text-white" : "bg-slate-100 text-black"
                }`}
                onClick={() => setSelected(option)}
              >
                <input className="hidden" type="radio" name="trip-type" value={option} readOnly />
                <p className="font-nunito font-bold">{option.replace("-", " ")}</p>
              </button>
            ))}
          </div>

          {/* Travelers & Class Dropdowns */}
          <div className="md:flex gap-2 mt-2 md:mt-0">
            {/* Travelers Dropdown */}
            <div className="relative">
              <button
                className="flex items-center justify-between px-4 py-2 w-full md:w-52 bg-gray-100 shadow-sm hover:bg-gray-200"
                onClick={() => setShowTravelers(!showTravelers)}
              >
                <div className="flex items-center space-x-2">
                  <FaUsers />
                  <span>{totalTravelers} Travelers</span>
                </div>
                <FaChevronDown />
              </button>

              {showTravelers && (
                <div className="absolute z-10 bg-white border w-full md:w-52 shadow-lg mt-2 p-4 space-y-4">
                  {Object.keys(travelers).map((type) => (
                    <div key={type} className="flex items-center justify-between text-sm">
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
                    className="w-full py-2 bg-orange-500 text-white hover:bg-blue-900"
                    onClick={() => setShowTravelers(false)}
                  >
                    Set Travelers
                  </button>
                </div>
              )}
            </div>

            {/* Economy Class Dropdown */}
            <div className="relative mt-2 md:mt-0">
              <button
                className="flex items-center justify-between w-full md:w-52 px-4 py-2 bg-gray-100 shadow-sm hover:bg-gray-200"
                onClick={() => setShowEconomy(!showEconomy)}
              >
                <span>{economy}</span>
                <FaChevronDown />
              </button>

              {showEconomy && (
                <div className="absolute z-10 md:w-52 w-full bg-white border shadow-lg mt-2 p-4 space-y-2">
                  {["Economy", "Premium Economy", "Business", "First Class"].map((option) => (
                    <button
                      key={option}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-200 ${
                        economy === option ? "bg-gray-100 font-bold" : ""
                      }`}
                      onClick={() => {
                        setEconomy(option);
                        setShowEconomy(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="md:flex items-center gap-2 justify-center mt-6">
          <input
            type="text"
            className="px-3 py-2 md:w-64 w-full outline-none border border-orange-500"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="px-3 py-2 md:w-64 w-full mt-2 md:mt-0 outline-none border border-orange-500"
            name="from"
            placeholder="From (Place)"
            value={formData.from}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="px-3 py-2 md:w-64 w-full mt-2 md:mt-0 outline-none border border-orange-500"
            name="to"
            placeholder="To (Place)"
            value={formData.to}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="border px-3 py-2 text-center mt-2 md:mt-0 bg-orange-500 hover:text-white font-nunito flex justify-between items-center"
          >
            Book <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketDetails;

import React, { useState } from 'react'
import SearchBarSelected from './SearchBarSelected'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SearchBar = () => {


  const countries = [
    { name: "Country", value: "Country"   },
    { name: "Nepal", value: "Nepal"   },
    { name: "Maldives", value: "Maldives"  },
    { name: "Sri-lanka", value: "Sri-lanka" },
    { name: "Vietnam", value: "Vietnam"},
    { name: "Singapore", value: "Singapore" },
    { name: "Malaysia", value: "Malaysia" },
  ];
  const Destinations = [
    { name: "Destination", value: "Destination"},
    { name: "1 Day Tour", value: "1 Day Tour"},
    { name: "2 Day Tour", value: "2 DayTour" },
    { name: "3 Day Tour", value: "3 Day Tour"},
    { name: "4 Day Tour", value: "4 Day Tour"},
    { name: "5 Day Tour", value: "5 Day Tour"},
    { name: "5 Day Tour", value: "5 Day Tour"},
  ];


   const [selected, setSelected] = useState("Pick your favorite place");
   const [selected2, setSelected2] = useState("Destinations");
   
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className=' bg-slate-100   md:my-10  md:h-24 md:pl-4 md:pr-4  bg-opacity-40   md:w-fit mx-auto  flex justify-center items-center '>
        <div className='flex flex-col    md:flex-row  justify-center items-center '>
           <input type="text" className='outline-none border p-[20.5px] w-[360px]  md:w-64 md:mr-[1px] font-nunito text-base'  placeholder='Where to ?'/>
           <div className="relative w-[360px]  md:w-64    mx-auto ">
                 <div
                   className="flex justify-between z-50 items-center w-[360px]  md:w-64 p-5 bg-white border  cursor-pointer"
                   onClick={() => setIsOpen(!isOpen)}
                 >
                   <span>{selected}</span>
                   <div className="flex flex-col ">
                     {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                   </div>
                 </div>
                 {isOpen && (
                   <div className="absolute left-0 w-[360px]  md:w-64 bg-white border  mt-1 shadow-md z-10">
                     {countries.map((country) => (
                       <div
                         key={country.value}
                         className="flex items-center gap-3 p-3 hover:bg-gray-200 cursor-pointer"
                         onClick={() => {
                           setSelected(country.name);
                           setIsOpen(false);
                         }}
                       >
                         {country.icon}
                         <span>{country.name}</span>
                       </div>
                     ))}
                   </div>
                 )}
               </div>
               <div className="relative w-[360px]  md:w-64    mx-auto ">
                 <div
                   className="flex justify-between z-50 items-center w-[360px]  md:w-64 p-5 bg-white border  cursor-pointer"
                   onClick={() => setIsOpen2(!isOpen2)}
                 >
                   <span>{selected2}</span>
                   <div className="flex flex-col ">
                     {isOpen2 ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                   </div>
                 </div>
                 {isOpen2 && (
                   <div className="absolute left-0 w-[360px]  md:w-64 bg-white border  mt-1 shadow-md z-10">
                     {Destinations.map((Destination) => (
                       <div
                         key={Destination.value}
                         className="flex items-center gap-3 p-3 hover:bg-gray-200 cursor-pointer"
                         onClick={() => {
                           setSelected2(Destination.name);
                           setIsOpen2(false);
                         }}
                       >
                         {Destination.icon}
                         <span>{Destination.name}</span>
                       </div>
                     ))}
                   </div>
                 )}
               </div>
            
            <button className='outline-none p-[20.5px] w-[360px] md:w-64 md:ml-[2px] bg-orange-500 hover:bg-orange-800 text-white font-nunito text-base '>Find Now</button>
           </div>
    </div>
  )
}

export default SearchBar
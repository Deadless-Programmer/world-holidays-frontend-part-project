import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const platforms = [
  { name: "Nepal", value: "Nepal"   },
  { name: "Maldives", value: "Maldives"  },
  { name: "Sri-lanka", value: "Sri-lanka" },
  { name: "Vietnam", value: "Vietnam"},
  { name: "Singapore", value: "Singapore" },
  { name: "Malaysia", value: "Malaysia" },
];

export default function SearchBarSelected() {
  const [selected, setSelected] = useState("Pick your favorite place");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[360px]  md:w-64   mx-auto ">
      <div
        className="flex justify-between items-center w-[360px]  md:w-64 p-5 bg-white border  cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <div className="flex flex-col">
          {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 w-[360px]  md:w-64 bg-white border  mt-1 shadow-md z-10">
          {platforms.map((platform) => (
            <div
              key={platform.value}
              className="flex items-center gap-3 p-3 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setSelected(platform.name);
                setIsOpen(false);
              }}
            >
              {platform.icon}
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

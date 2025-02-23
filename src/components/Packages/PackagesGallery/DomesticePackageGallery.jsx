import React from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const DomesticePackageGallery = ({packageHeading1, packageHeading2, packages, loading}) => {
 

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <BeatLoader margin="8" color="#FFA500" loading={true} size={15} />
      </div>);




    
  return (
    <div className="flex flex-col justify-center items-center my-16  font-sans">
      <h1 className="text-2xl text-gray-800 mb-6 font-playfair md:text-4xl font-semibold   "> <span className="text-orange-500">{packageHeading1}</span> {packageHeading2}</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-5 ">
      {packages && packages.length > 0 ? (
  packages.map((packageData) => (
    <Link to={`/domesticePackageDetails/${packageData._id}`}
      key={packageData._id}
      className="relative max-w-[300px] max-h-[200px] overflow-hidden flex justify-center items-center group "
    >
      <img
        src={packageData.image}
        alt="Gallery"
        className="max-w-full h-auto"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-gray-800 text-sm tracking-wide scale-0 group-hover:scale-100 transition-transform duration-500">
          {packageData.location}
        </p>
      </div>
    </Link>
  ))
) : (
  <p>No packages available.</p>
)}
      </div>
    </div>
  );
};

export default DomesticePackageGallery;

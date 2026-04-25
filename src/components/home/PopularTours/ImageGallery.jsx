import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const ImageGallery = () => {
 

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  // const notify = () => toast('Wow so easy !');

  useEffect(() => {
    fetch("https://world-holidays-backend-part.vercel.app/popular_packages")
      .then((res) => {
        if (!res.ok) {
          throw new toast("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPackages(data);
        setLoading(false);
      })
      .catch((error) => {
        setErr(error.message);
        setLoading(false);
      });
  }, []);

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
        <BeatLoader  color="#FFA500" loading={true} size={15} />
      </div>
    ); 
  if (err) return toast({ err }); 
   
  // console.log(packages)

    // const popularPackages = packages.filter(popularpackage=> popularpackage.category ==="Popular")
    // console.log(popularPackages)

  return (
    <div className="grid gap-4 lg:gap-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {
        packages && packages.length > 0 ?(
        
         packages.map((packageData) => (
          <Link to={`/popular-package-details/${packageData._id}`}
          key={packageData._id}
            className="relative group overflow-hidden"
          >
            <img
              src={packageData.image}
              alt={packageData.location}
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-center p-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
             <h1 className="text-center"> {packageData.location}</h1>
            </div>
          </Link>
        )) ) : (<p>No popular packages available.</p>)}
      </div>
    </div>
  );
};

export default ImageGallery;

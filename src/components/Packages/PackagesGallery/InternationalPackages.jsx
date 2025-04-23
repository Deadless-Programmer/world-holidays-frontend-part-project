import React, { useEffect, useState, CSSProperties } from "react";
import PackagesGallery from "./PackagesGallery";
import { toast, ToastContainer } from "react-toastify";

import BeatLoader from "react-spinners/BeatLoader";

const InternationalPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  // const notify = () => toast('Wow so easy !');

  useEffect(() => {
    fetch("https://world-holidays-backend-part-two.vercel.app/interNational_packages")
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

 

  return (
    <div>
      <ToastContainer />
      <PackagesGallery loading={loading} packages={packages}
        packageHeading1={"International"}
        packageHeading2={"Packages"}
      />
    </div>
  );
};

export default InternationalPackages;

import React, { useEffect, useState, CSSProperties } from "react";
import PackagesGallery from "./PackagesGallery";
import { toast, ToastContainer } from "react-toastify";

import BeatLoader from "react-spinners/BeatLoader";

const InternationalPackages = () => {
  const [intPackages, setIntPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  // const notify = () => toast('Wow so easy !');

  useEffect(() => {
    fetch("InternationalPackages.json")
      .then((res) => {
        if (!res.ok) {
          throw new toast("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setIntPackages(data);
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
    ); // Show loading state
  if (err) return toast({ err }); // Show error message

  // console.log(intPackages);

  return (
    <div>
      <ToastContainer />
      <PackagesGallery loading={loading} intPackages={intPackages}
        packageHeading1={"International"}
        packageHeading2={"Packages"}
      />
    </div>
  );
};

export default InternationalPackages;

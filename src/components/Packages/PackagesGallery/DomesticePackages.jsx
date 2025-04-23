import React, { useEffect, useState } from 'react'
import PackagesGallery from './PackagesGallery'
import { BeatLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import DomesticePackageGallery from './DomesticePackageGallery';

const DomesticePackages = () => {

  const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

      useEffect(() => {
        fetch("https://world-holidays-backend-part-two.vercel.app/domestic_packages")
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
      // console.log(packages)

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
       <DomesticePackageGallery loading={loading} packages={packages} packageHeading1={'Domestic'} packageHeading2={'Packages'}/>
        {/* <PackagesGallery /> */}
    </div>
  )
}

export default DomesticePackages
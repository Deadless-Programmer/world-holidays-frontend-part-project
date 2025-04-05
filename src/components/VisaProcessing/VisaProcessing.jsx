import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHeader from "../PageHeader/PageHeader";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";




const VisaProcessing = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // search term used for filtering
  const [inputValue, setInputValue] = useState(""); // to store what the user types
  const inputRef = useRef(null); // useRef to access the input field
const axiosPublic = useAxiosPublic();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get('/visa-processing-fee');
        setData(res.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [axiosPublic]);

  const filteredData = data.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleSearchClick = () => {
    setSearchQuery(inputValue); // Update search query when button is clicked
  };



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearchQuery(e.target.value);
  };
  return (
    <>
 <Helmet>
           <title>W-holidays | Visa Processing</title>
           </Helmet>
        
      <PageHeader bgImage={'https://images.unsplash.com/photo-1550500880-067b2667c39a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
    <div className="mt-20 mb-10 flex flex-col md:flex-row justify-center items-center gap-1">
              <input className="p-3 md:w-[420px] w-80 border" type="text" value={inputValue}  onChange={handleInputChange} name="" id=""  placeholder="Input country name"/>
              <button onClick={handleSearchClick} className="bg-orange-500 p-3 text-white rounded-sm" >Search Here</button>
    </div>
    <div  className="flex flex-wrap max-w-[1300px] mx-auto overflow-hidden cursor-pointer">
        {filteredData.length > 0 ? (
          filteredData.map((country, index) => (
            <Link to={`/services/visa-processing/${country._id}`}
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 bg-gray-900 border-r-2 border-gray-800 p-2 relative group"
            >
              <div className="transition-transform duration-[60s] ease-in-out hover:pause animate-move-it">
                <div className="relative text-right">
                  <div className="overflow-hidden relative">
                    <img
                      src={country.src}
                      alt={country.name}
                      className="w-[90%] transform translate-x-[5%] transition-transform duration-700 ease-in-out hover:-translate-x-[5%] group-hover:scale-110"
                    />
                    <div className="absolute inset-1 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-500">
                      <p className="text-white text-lg font-bold">
                        Visa Fee: {country.visaFee} TK
                      </p>
                    </div>
                  </div>
                  <p className="text-white z-50 uppercase text-2xl font-bold tracking-wide transition-colors duration-500 ease-in-out hover:text-gray-300">
                    {country.name}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">No country found.</p>
        )}
      </div>
    </>
  );
};

export default VisaProcessing;
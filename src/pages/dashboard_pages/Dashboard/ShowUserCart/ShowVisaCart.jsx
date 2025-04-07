import React from 'react'

import { FiTrash2 } from 'react-icons/fi';
import { FaUsersCog } from "react-icons/fa";
import Swal from 'sweetalert2';
import { RxUpdate } from 'react-icons/rx';

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
const ShowVisaCart = () => {


    const axiosSecure = useAxiosSecure();
    // const {user}=useAuth();
       const {  data: visaCarts=[], refetch } = useQuery({
           queryKey: ['ticketCarts'],
           queryFn: async() =>{
            const res = await axiosSecure.get('/visa-processing-fee-carts_orders')
            return res.data}
           
         })
     
   




         
  return (
    <div>
        <div className='mt-5 ml-3 md:ml-0'>
            <h2 className='text-2xl font-medium font-playfair'> All Visa cart Orders : {visaCarts.length}  </h2>
        </div>

        <div className="overflow-x-auto  border border-base-content/5 bg-base-100 mt-10">
        <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>User Name</th>
        <th>Image</th>
        <th>Guests From</th>
        <th>Contact</th>
        <th>Date</th>
        <th>Destination</th>
      </tr>
    </thead>
    <tbody>
            {visaCarts
              .slice()
              .reverse()
              .map((visaCart, indx) => {
                // Ensure countryData exists before accessing properties
                const { name, 
                    userLocation, contact, date, countryData } =
                visaCart;
                return (
                  <tr key={indx}>
                    <th>{indx + 1}</th>
                    <td>{name || "N/A"}</td>
                    <td>
                      {countryData?.src ? (
                        <img
                          className="w-12 h-12 object-cover rounded"
                          src={countryData?.src}
                          alt="visa"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>{ userLocation || "N/A"}</td>
                    <td>{contact || "N/A"}</td>
                    <td>{date ? date.split("T")[0] : "N/A"}</td>
                    <td>{countryData?.name || "N/A"}</td>
                  </tr>
                );
              })}
          </tbody>
  </table>
</div>
    </div>
  )
}

export default ShowVisaCart;
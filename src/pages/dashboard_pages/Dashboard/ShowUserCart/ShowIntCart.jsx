import React from 'react'

import { FiTrash2 } from 'react-icons/fi';
import { FaUsersCog } from "react-icons/fa";
import Swal from 'sweetalert2';
import { RxUpdate } from 'react-icons/rx';

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
const ShowIntCart = () => {


    const axiosSecure = useAxiosSecure();
    // const {user}=useAuth();
       const {  data: intPackageCarts=[], refetch } = useQuery({
           queryKey: ['intPackageCarts'],
           queryFn: async() =>{
            const res = await axiosSecure.get('/int_packages_cart_orders')
            return res.data}
           
         })
     
   




         
  return (
    <div>
        <div>
            <h2 className='text-2xl font-medium font-playfair'> All International Packages Order : {intPackageCarts.length}  </h2>
        </div>

        <div className="overflow-x-auto  border border-base-content/5 bg-base-100 mt-10">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>User Name</th>
        <th>Image</th>
        <th>Guests</th>
        <th>Contact</th>
        <th>Date</th>
        <th>Destination</th>
      </tr>
    </thead>
    <tbody>
            {intPackageCarts
              .slice()
              .reverse()
              .map((intPackageCart, indx) => {
                // Ensure packageData exists before accessing properties
                const { name, totalGuest, contact, date, packageData } =
                  intPackageCart;
                return (
                  <tr key={indx}>
                    <th>{indx + 1}</th>
                    <td>{name || "N/A"}</td>
                    <td>
                      {packageData?.image ? (
                        <img
                          className="w-12 h-12 object-cover rounded"
                          src={packageData.image}
                          alt="Package"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>{totalGuest || "N/A"}</td>
                    <td>{contact || "N/A"}</td>
                    <td>{date ? date.split("T")[0] : "N/A"}</td>
                    <td>{packageData?.destination || "N/A"}</td>
                  </tr>
                );
              })}
          </tbody>
  </table>
</div>
    </div>
  )
}

export default ShowIntCart;
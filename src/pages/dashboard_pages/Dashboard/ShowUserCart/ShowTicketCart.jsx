import React from 'react'

import { FiTrash2 } from 'react-icons/fi';
import { FaUsersCog } from "react-icons/fa";
import Swal from 'sweetalert2';
import { RxUpdate } from 'react-icons/rx';

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
const ShowTicketCart = () => {


    const axiosSecure = useAxiosSecure();
    // const {user}=useAuth();
       const {  data: ticketCarts=[], refetch } = useQuery({
           queryKey: ['ticketCarts'],
           queryFn: async() =>{
            const res = await axiosSecure.get('/ticket_carts_orders')
            return res.data}
           
         })
     
   




         
  return (
    <div>
        <div>
            <h2 className='text-2xl font-medium font-playfair'> All Ticket cart Orders : {ticketCarts.length}  </h2>
        </div>

        <div className="overflow-x-auto  border border-base-content/5 bg-base-100 mt-10">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>User Name</th>
        <th>Roots</th>
        <th>Class</th>
        
        <th>Destination</th>
      </tr>
    </thead>
    <tbody>
            {ticketCarts
              .slice()
              .reverse()
              .map((ticketCart, indx) => {
                // Ensure packageData exists before accessing properties
              
                return (
                  <tr key={indx}>
                    <th>{indx + 1}</th>
                    <td>{ticketCart.name || "N/A"}</td>
                    <td>{ticketCart.flightInfo.selected || "N/A"}</td>
                    
                    <td>{ticketCart.flightInfo.economy || "N/A"}</td>
                    <td>{ticketCart.flightInfo.formData?.to || "N/A"}</td>
                    
                   
                  </tr>
                );
              })}
          </tbody>
  </table>
</div>
    </div>
  )
}

export default ShowTicketCart;
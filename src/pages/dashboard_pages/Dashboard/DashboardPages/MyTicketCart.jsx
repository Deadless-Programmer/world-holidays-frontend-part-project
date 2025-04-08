import React from 'react'

import { FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useDomPackageCart from '../../../../hooks/useDomPackageCart';
import usePopularDestination from '../../../../hooks/usePopularDestination';
import useTicketCart from '../../../../hooks/useTicketCart';

const MyTicketCart = () => {
    const [ticketCart, refetch] = useTicketCart();
    const axiosSecure = useAxiosSecure();
//  console.log(domCart)


 const handleDelete =(id)=>{
      console.log(id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/ticket_cart/${id}`).then(res=>{
                if(res.data.deletedCount >0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your ticket has been deleted.",
                        icon: "success"
                      });
                }
            })
         
        }
      });
 }
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Root</th>
        <th>E-mail</th>
        <th>Class</th>
        <th>
        destination</th>
       
        <th>Delete</th>
       
      </tr>
    </thead>
    <tbody>

        {ticketCart.map((cartData,indx)=>{
           return  <tr key={indx}>
             <th>{indx +1}</th>
             <td>{cartData.name}</td>
             <td>{cartData.flightInfo.
selected}</td>
             <td>{cartData.email}</td>
             <td>{cartData.flightInfo.
economy
             }</td>
             <td>{cartData.flightInfo.formData.to
             }</td>
            
             <td> <h1 onClick={()=>handleDelete(cartData._id)} className='  p-2 hover:text-red-500  cursor-pointer font-nunito text-2xl'> <FiTrash2 /></h1></td>
           </tr>
        })}
     
      
    
    </tbody>
    
  </table>
</div>
    </div>
  )
}

export default MyTicketCart;
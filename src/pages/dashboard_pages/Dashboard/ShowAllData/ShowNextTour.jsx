import React from 'react'

import { FiTrash2 } from 'react-icons/fi';
import { FaUsersCog } from "react-icons/fa";
import Swal from 'sweetalert2';
import { RxUpdate } from 'react-icons/rx';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
const ShowNextTour = () => {


    const axiosSecure = useAxiosSecure();
    // const {user}=useAuth();
       const {  data: nextTours=[], refetch } = useQuery({
           queryKey: [' nextTours'],
           queryFn: async() =>{
            const res = await axiosSecure.get('/show-all-next_tour')
            return res.data}
           
         })
     
   



  
   const handleDelete =(pacId)=>{
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
       
                   axiosSecure.delete(`/show-all-next_tour/${pacId._id}`).then(res=>{
                       if(res.data.deletedCount >0){
                           refetch();
                           Swal.fire({
                               title: "Deleted!",
                               text: `${pacId.destination} has been deleted.`,
                               icon: "success"
                             });
                       }
                   })
                
               }
             });
   };







         
  return (
    <div>
        <div>
            <h2 className='text-2xl font-medium font-playfair'> Show All Next Tour : {nextTours.length}  </h2>
        </div>

        <div className="overflow-x-auto  border border-base-content/5 bg-base-100 mt-10">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Place</th>
        <th>Date</th>
        <th>Duration</th>
        <th>Amount</th>
        <th>Remove</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
         nextTours.slice().reverse().map(( nextTour, indx)=>{
return <tr key={indx}>
        <th>{indx + 1 }</th>
        <td>{nextTour.destination}</td>
        <td>{nextTour.date_range}</td>
        <td>{nextTour.duration}</td>
        <td>
        {nextTour.price.amount} BDT
</td>

        {/* <td> {user.role ==='admin' ? "Admin" : <h1 onClick={()=>handleMakeAdmin(user)} className='  p-2 hover:text-red-500  cursor-pointer font-nunito text-2xl'> <FaUsersCog /> </h1>}  </td> */}
       <td> <h1 onClick={()=>handleDelete(nextTour)} className='  p-2 hover:text-red-500  cursor-pointer font-nunito text-2xl'> <FiTrash2 /></h1></td>
       <td> <Link to={`/dashboard/update-next-tour/${nextTour._id}`}><h1  className='  p-2 hover:text-red-500  cursor-pointer font-nunito text-2xl'> <RxUpdate /></h1></Link> </td>
      </tr>
        })
      }
      
    
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ShowNextTour;
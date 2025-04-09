import React from 'react'

import { FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { RxUpdate } from 'react-icons/rx';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ShowReview = () => {


    const axiosSecure = useAxiosSecure();
    // const {user}=useAuth();
       const {  data: getReviews=[], refetch } = useQuery({
           queryKey: ['getReviews'],
           queryFn: async() =>{
            const res = await axiosSecure.get('/show-travelersReview')
            return res.data}
           
         })
     
   
   const handleApproved =(review)=>{
         axiosSecure.patch(`/show-travelersReview/approved/${review._id}`).then(res=>{
            if(res.data.modifiedCount > 0 ){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Review approved`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         })
   }
   const handleDenied =(review)=>{
         axiosSecure.patch(`/show-travelersReview/denied/${review._id}`).then(res=>{
            if(res.data.modifiedCount > 0 ){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Review denied`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         })
   }


  
//    const handleDelete =(pacId)=>{
//          Swal.fire({
//                title: "Are you sure?",
//                text: "You won't be able to revert this!",
//                icon: "warning",
//                showCancelButton: true,
//                confirmButtonColor: "#3085d6",
//                cancelButtonColor: "#d33",
//                confirmButtonText: "Yes, delete it!"
//              }).then((result) => {
//                if (result.isConfirmed) {
       
//                    axiosSecure.delete(`/show-popular_destination/${pacId._id}`).then(res=>{
//                        if(res.data.deletedCount >0){
//                            refetch();
//                            Swal.fire({
//                                title: "Deleted!",
//                                text: `${pacId.name} has been deleted.`,
//                                icon: "success"
//                              });
//                        }
//                    })
                
//                }
//              });
//    };







         
  return (
    <div>
        <div>
            <h2 className='text-2xl font-medium font-playfair'> Show All client review : {getReviews.length}  </h2>
        </div>

        <div className="overflow-x-auto  border border-base-content/5 bg-base-100 mt-10">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Image</th>
        <th>Review</th>       
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
       getReviews.slice().reverse().map(( getReview, indx)=>{
return <tr key={indx}>
        <th>{indx + 1 }</th>

        <td> <img className='w-10 hue-rotate-180' src={getReview.image} alt="" /> </td>
        <td> <p className=' w-40'>{getReview.p_description}</p> </td>
       
      
        <td>
  <select
    id="status"
    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
    value={getReview.status}
    onChange={(e) => {
      const selectedValue = e.target.value;
      if (selectedValue === "set-approved") handleApproved(getReview);
      if (selectedValue === "set-denied") handleDenied(getReview);
    }}
  >
    <option value="">Select Status</option>
    {getReview.status === "approved" && <option value="approved">Approved</option>}
    {getReview.status === "denied" && <option value="denied">Denied</option>}
    {(getReview.status !== "approved" && getReview.status !== "denied") && (
      <>
        <option value="set-approved">Make Approved</option>
        <option value="set-denied">Make Denied</option>
      </>
    )}
  </select>
</td>

       
     
      </tr>
        })
      }
      
    
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ShowReview;
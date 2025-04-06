import React from 'react'

import { FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';

import useVisaprocessingCart from '../../../../hooks/useVisaprocessingCart';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MyVisa = () => {
    const [visaCart, refetch] = useVisaprocessingCart();
    const axiosSecure = useAxiosSecure();



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

            axiosSecure.delete(`/visa_carts/${id}`).then(res=>{
                if(res.data.deletedCount >0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your visa booking has been deleted.",
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
        <th>Photo</th>
        <th>E-mail</th>
        <th>contact</th>
        <th>
        destination</th>
        <th>Date</th>
        <th>Delete</th>
       
      </tr>
    </thead>
    <tbody>

        {visaCart.map((cartData,indx)=>{
           return  <tr key={indx}>
             <th>{indx +1}</th>
             <td>{cartData.name}</td>
             <td><img className='h-10 w-10 rounded' src={cartData.countryData
.src} alt="" /></td>
             <td>{cartData.email}</td>
             <td>{cartData.contact
             }</td>
             <td>{cartData.countryData.
name
             }</td>
             <td>{new Date(cartData.date).toISOString().split('T')[0]}</td>
             <td> <h1 onClick={()=>handleDelete(cartData._id)} className='  p-2 hover:text-red-500  cursor-pointer font-nunito text-2xl'> <FiTrash2 /></h1></td>
           </tr>
        })}
     
      
    
    </tbody>
    
  </table>
</div>
    </div>
  )
}

export default MyVisa ;
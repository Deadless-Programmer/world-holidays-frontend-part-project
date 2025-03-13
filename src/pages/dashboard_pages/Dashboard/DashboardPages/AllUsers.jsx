import React from 'react'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FiTrash2 } from 'react-icons/fi';
import { FaUsersCog } from "react-icons/fa";
import Swal from 'sweetalert2';
const AllUsers = () => {


    const axiosSecure = useAxiosSecure();
    // const {user}=useAuth();
       const {  data: users=[], refetch } = useQuery({
           queryKey: ['users'],
           queryFn: async() =>{
            const res = await axiosSecure.get('/users')
            return res.data}
           
         })
     
   console.log(users)



   const handleMakeAdmin =(user)=>{
         axiosSecure.patch(`/users/admin/${user._id}`).then(res=>{
            if(res.data.modifiedCount > 0 ){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         })
   }

   const handleDelete =(user)=>{
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
       
                   axiosSecure.delete(`/users/${user._id}`).then(res=>{
                       if(res.data.deletedCount >0){
                           refetch();
                           Swal.fire({
                               title: "Deleted!",
                               text: "Youruser has been deleted.",
                               icon: "success"
                             });
                       }
                   })
                
               }
             });
   }
         
  return (
    <div>
        <div>
            <h2 className='text-2xl font-medium font-playfair'> All user {users.length}  </h2>
        </div>

        <div className="overflow-x-auto  border border-base-content/5 bg-base-100 mt-10">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        users.map((user, indx)=>{
return <tr key={indx}>
        <th>{indx + 1 }</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        
        <td> {user.role ==='admin' ? "Admin" : <h1 onClick={()=>handleMakeAdmin(user)} className='  p-2 hover:text-red-500  cursor-pointer font-nunito text-2xl'> <FaUsersCog /> </h1>}  </td>
       <td> <h1 onClick={()=>handleDelete(user)} className='  p-2 hover:text-red-500  cursor-pointer font-nunito text-2xl'> <FiTrash2 /></h1></td>
      </tr>
        })
      }
      
    
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AllUsers
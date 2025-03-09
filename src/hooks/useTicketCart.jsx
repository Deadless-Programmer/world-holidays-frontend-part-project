import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useTicketCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=useAuth();
       const {  data: ticketCart=[], refetch } = useQuery({
           queryKey: ['ticketCart' , user?.email],
           queryFn: async() =>{
            const res = await axiosSecure.get(`/ticket_cart?email=${user.email}`)
            return res.data}
           
         })
     
   
         return [ticketCart, refetch]
}

export default useTicketCart
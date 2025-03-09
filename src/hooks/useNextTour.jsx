import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useNextTour = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=useAuth();
       const {  data: nextTourCart=[], refetch } = useQuery({
           queryKey: ['nextTourCart' , user?.email],
           queryFn: async() =>{
            const res = await axiosSecure.get(`/next_tour_carts?email=${user.email}`)
            return res.data}
           
         })
     
   
         return [nextTourCart, refetch]
 
}

export default useNextTour
import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const usePopularDestination = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=useAuth();
       const {  data: popularDesCart=[], refetch } = useQuery({
           queryKey: ['popularDesCart' , user?.email],
           queryFn: async() =>{
            const res = await axiosSecure.get(`/popular_des_cart?email=${user.email}`)
            return res.data}
           
         })
     
   
         return [popularDesCart, refetch]
}

export default usePopularDestination
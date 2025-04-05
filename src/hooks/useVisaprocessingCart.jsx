import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useVisaprocessingCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=useAuth();
       const {  data: visaCart=[], refetch } = useQuery({
           queryKey: ['visaCart' , user?.email],
           queryFn: async() =>{
            const res = await axiosSecure.get(`/visa_cart?email=${user.email}`)
            return res.data}
           
         })
     
   
         return [visaCart, refetch]
}

export default useVisaprocessingCart;
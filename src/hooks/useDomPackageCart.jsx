import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useDomPackageCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=useAuth();
       const {  data: domCart=[], refetch } = useQuery({
           queryKey: ['domCart' , user?.email],
           queryFn: async() =>{
            const res = await axiosSecure.get(`/dom_packages_carts?email=${user.email}`)
            return res.data}
           
         })
     
   
         return [domCart, refetch]
}

export default useDomPackageCart
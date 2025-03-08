import { useQuery } from '@tanstack/react-query'
import useAxiosSecure, { axiosSecure } from './useAxiosSecure'
import useAuth from './useAuth';


const useIntPackageCart = () => {
 const axiosSecure = useAxiosSecure();
 const {user}=useAuth();
    const {  data: intCart=[], refetch } = useQuery({
        queryKey: ['intCart' , user?.email],
        queryFn: async() =>{
         const res = await axiosSecure.get(`/int_packages_carts?email=${user.email}`)
         return res.data}
        
      })
  

      return [intCart, refetch]
}

export default useIntPackageCart;
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure, { axiosSecure } from './useAxiosSecure'


const useIntPackageCart = () => {
 const axiosSecure = useAxiosSecure();
    const { isPending, error, data: intCart=[] } = useQuery({
        queryKey: ['intCart'],
        queryFn: async() =>{
         const res = await axiosSecure.get('/int_packages_carts')
         return res.data}
        
      })
  

      return [intCart]
}

export default useIntPackageCart;
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';





const useTravelersReview = () => {
 const axiosSecure = useAxiosSecure();

    const {  data: reviews=[], refetch } = useQuery({
        queryKey: ['reviews' ],
        queryFn: async() =>{
         const res = await axiosSecure.get('/travelersReview')
         return res.data}
        
      })


      
  

      return [reviews, refetch]
}

export default useTravelersReview;
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';




const useTeam = () => {
 const axiosSecure = useAxiosSecure();

    const {  data: teamMembers=[], refetch } = useQuery({
        queryKey: ['teamMembers' ],
        queryFn: async() =>{
         const res = await axiosSecure.get('/ourTeamMembers')
         return res.data}
        
      })


      console.log(teamMembers)
  

      return [teamMembers, refetch]
}

export default useTeam;
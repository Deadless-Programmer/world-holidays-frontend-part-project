// useAdmin.js
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
  
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
      queryKey: [user?.email, "isAdmin"],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
        try {
          const res = await axiosSecure.get(`/users/admin/${user.email}`);
          return res.data.admin;
        } catch (error) {
          // Handle 403 (email mismatch) without logging out
          if (error.response?.status === 403) {
            console.log("User email mismatch");
            return false;
          }
          throw error;
        }
      },
    });
  
    return [isAdmin, isAdminLoading];
  };


export default useAdmin;
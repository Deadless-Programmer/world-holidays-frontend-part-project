// useRoles.js - Combined role check hook
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRoles = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: roles, isPending: isLoading } = useQuery({
    queryKey: ['userRoles', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/users/roles/${user.email}`);
        return res.data.role; // { isAdmin: true, isModerator: false }
      } catch (error) {
        if (error.response?.status === 403) return { isAdmin: false, isModerator: false };
        throw error;
      }
    }
  });

  return [roles, isLoading];
};

export default useRoles;
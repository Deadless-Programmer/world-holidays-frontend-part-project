import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useModerator = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
  
    const { data: isModaretor, isPending: isModeratorLoading } = useQuery({
      queryKey: [user?.email, "isModaretor"],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
        try {
          const res = await axiosSecure.get(`/users/moderator/${user?.email}`);
          return res.data.moderator;
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
  
    return [isModaretor, isModeratorLoading];
};

export default useModerator;
// useAxiosSecure.js
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  // Add request interceptor
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  // Add response interceptor
  axiosSecure.interceptors.response.use(
   (response) => response,
   async (error) => {
     const status = error.response?.status;
     const url = error.config?.url;
 
     // Skip logout for admin-check endpoint
     useEffect(() => {
      if (error?.response?.status === 401 || 403) {
        navigate(' /signInUpForm');
      }
    }, [error]);
 
     return Promise.reject(error);
   }
 );

  return axiosSecure;
};

export default useAxiosSecure;
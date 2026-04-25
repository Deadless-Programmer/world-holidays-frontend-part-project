import axios from "axios";



export const axiosPublic = axios.create({
     baseURL : 'https://world-holidays-backend-part.vercel.app'
    //  baseURL : 'https://world-holidays-backend-part.vercel.app'
});

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic
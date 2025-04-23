import axios from "axios";



export const axiosPublic = axios.create({
     baseURL : 'https://world-holidays-backend-part-two.vercel.app'
    //  baseURL : 'https://world-holidays-backend-part-two.vercel.app'
});

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic
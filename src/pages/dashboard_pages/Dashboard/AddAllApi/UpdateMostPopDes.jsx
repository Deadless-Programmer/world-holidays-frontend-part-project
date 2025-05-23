import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const UpdateMostPopDes = () => {
    const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      country: '',
      image: '',
      overview: {
        icon: '',
        title: '',
        description: '',
      }
    }
  });


      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch(`https://world-holidays-backend-part-two.vercel.app/show-popular_destination/${id}`);
                  if (!response.ok) throw new Error('Failed to fetch data');
                  
                  const result = await response.json();
                  
                 
                  Object.keys(result).forEach(key => setValue(key, result[key]));
                  
                  
                  setLoading(false);
              } catch (err) {
                  setError(err.message);
                  setLoading(false);
              }
          };
          
          fetchData();
      }, [id, setValue]);

  const onSubmit = async(data) => {
    console.log(data);

    const formattedData = {
      name: data.name ,
      country: data.country,
     
    
      image: data.image ,
      
      overview: data.overview
     
    };

    console.log('Formatted Data:', formattedData);

    const result = await axiosSecure.patch(`/show-popular_destination/${id}`, formattedData).catch((error) => {
      console.log('Error details:', error.response?.data);
    });

    if (result.data.modifiedCount > 0) {
                   Swal.fire({
                       position: "top-end",
                       icon: "success",
                       title: `${data.name} has been Updated`,
                       showConfirmButton: false,
                       timer: 1500
                   });
       
                   reset();
               }
  };
  if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 shadow-2xl bg-white ">
        <h1 className='font-playfair text-3xl py-8'>Update most popular destination</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-2 text-lg">Name</label>
              <input {...register('name', { required: 'Name is required' })} className="w-full border border-gray-300 p-2 " />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="flex-1">
              <label className="block mb-2 text-lg">Country</label>
              <input {...register('country', { required: 'Country is required' })} className="w-full border border-gray-300 p-2 " />
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-lg">Image URL</label>
            <input {...register('image', { required: 'Image URL is required' })} className="w-full border border-gray-300 p-2 " />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-2 text-lg">Overview Icon</label>
              <input {...register('overview.icon', { required: 'Overview icon is required' })} className="w-full border border-gray-300 p-2 " />
              {errors.overview?.icon && <p className="text-red-500 text-sm mt-1">{errors.overview.icon.message}</p>}
            </div>

            <div className="flex-1">
              <label className="block mb-2 text-lg">Overview Title</label>
              <input {...register('overview.title', { required: 'Overview title is required' })} className="w-full border border-gray-300 p-2 " />
              {errors.overview?.title && <p className="text-red-500 text-sm mt-1">{errors.overview.title.message}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-lg">Overview Description</label>
            <textarea {...register('overview.description', { required: 'Overview description is required' })} className="w-full border border-gray-300 p-2 " rows="4"></textarea>
            {errors.overview?.description && <p className="text-red-500 text-sm mt-1">{errors.overview.description.message}</p>}
          </div>

          <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 ">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMostPopDes;

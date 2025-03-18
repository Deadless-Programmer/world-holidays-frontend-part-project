import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateDomPackage = () => {
     

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/show-all-domestic-packages/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    // console.log(data)
   



 const onSubmit = async(data) => {
        const formattedData = {
            destination: data.destination,
            price: {
                amount: Number(data.amount),
                currency: data.currency,
                per: data.per,
            },
            rating: parseFloat(data.rating),
            date_range: data.dateRange,
            duration: data.duration,
            location: data.location,
            image: data.image,
            included_services: data.includedServices.split(',').map(item => item.trim()),
            overview: data.overview,
            included: data.included.split(',').map(item => item.trim()),
            excluded: data.excluded.split(',').map(item => item.trim()),
            tour_location_images: data.tourLocationImages.split(',').map(item => item.trim())
        };

        console.log('Formatted Data:', formattedData);
        const reult = await axiosSecure.post("/domestic_packages" ,formattedData ).catch((error) => {
          console.log("Error details:", error.response?.data); 
        });
           if(reult.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Domestice package has been saved to database",
              showConfirmButton: false,
              timer: 1500
            });
  
            reset();
          }
       
    };



  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg">
    <h2 className="text-2xl font-bold mb-4"> Update Package</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
        {/* First Row */}
        <div className="flex gap-4">
            <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Destination</label>
                <input defaultValue={data.destination} {...register('destination', { required: true })} className="w-full p-2 border border-gray-300" />
                {errors.destination && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Price Amount</label>
                <input defaultValue={data?.price?.amount} {...register('amount', { required: true })} className="w-full p-2 border border-gray-300" />
                {errors.amount && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-4">
            <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Currency</label>
                <input  {...register('currency', { required: true })} defaultValue="BDT" className="w-full p-2 border border-gray-300" />
                {errors.currency && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Per</label>
                <input  {...register('per', { required: true })} defaultValue="adult" className="w-full p-2 border border-gray-300" />
                {errors.per && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
        </div>

        {/* Third Row */}
        <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <input defaultValue={data.rating} {...register('rating')} className="w-full p-2 border border-gray-300" />
        </div>

        {/* Fourth Row */}
        <div className="flex gap-4">
            <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Date Range</label>
                <input defaultValue={data.date_range} {...register('dateRange')} className="w-full p-2 border border-gray-300" />
            </div>
            <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Duration</label>
                <input defaultValue={data.duration} {...register('duration')} className="w-full p-2 border border-gray-300" />
            </div>
        </div>

        {/* Fifth Row */}
        <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input defaultValue={data.location} {...register('location')} className="w-full p-2 border border-gray-300" />
        </div>

        {/* Sixth Row */}
        <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input defaultValue={data.image} {...register('image')} className="w-full p-2 border border-gray-300" />
        </div>

        {/* Seventh Row */}
        <div>
            <label className="block text-sm font-medium mb-1">Included Services (comma separated)</label>
            <input defaultValue={data.included_services} {...register('includedServices')} className="w-full p-2 border border-gray-300" />
        </div>

        {/* Eighth Row */}
        <div>
            <label className="block text-sm font-medium mb-1">Overview</label>
            <textarea defaultValue={data.overview} {...register('overview')} className="w-full p-2 border border-gray-300"></textarea>
        </div>

        {/* Ninth Row */}
        <div>
            <label className="block text-sm font-medium mb-1">Included (comma separated)</label>
            <input defaultValue={data.included} {...register('included')} className="w-full p-2 border border-gray-300" />
        </div>

        {/* Tenth Row */}
        <div>
            <label className="block text-sm font-medium mb-1">Excluded (comma separated)</label>
            <input defaultValue={data.excluded} {...register('excluded')} className="w-full p-2 border border-gray-300" />
        </div>

        {/* Eleventh Row */}
        <div>
            <label className="block text-sm font-medium mb-1">Tour Location Images (comma separated URLs)</label>
            <input defaultValue={data.tour_location_images} {...register('tourLocationImages')} className="w-full p-2 border border-gray-300" />
        </div>

        <button type="submit" className="w-full py-2 mt-4 bg-orange-500 text-white hover:bg-blue-700">
            Submit
        </button>
    </form>
</div>
  )
}

export default UpdateDomPackage
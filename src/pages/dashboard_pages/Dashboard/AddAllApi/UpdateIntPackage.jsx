import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateIntPackage = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/show-all-international-packages/${id}`);
                if (!response.ok) throw new Error('Failed to fetch data');
                
                const result = await response.json();
                
                // Populate the form fields with the fetched data
                Object.keys(result).forEach(key => setValue(key, result[key]));
                
                if (result.price) {
                    setValue('amount', result.price.amount);
                    setValue('currency', result.price.currency);
                    setValue('per', result.price.per);
                }
                
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        
        fetchData();
    }, [id, setValue]);

    const onSubmit = async (formData) => {
        const formattedData = {
            destination: formData.destination,
            price: {
                amount: Number(formData.amount),
                currency: formData.currency,
                per: formData.per,
            },
            rating: parseFloat(formData.rating),
            date_range: formData.dateRange,
            duration: formData.duration,
            location: formData.location,
            image: formData.image,
            included_services: typeof formData.includedServices === 'string'
                ? formData.includedServices.split(',').map(item => item.trim())
                : formData.includedServices,
            overview: formData.overview,
            included: typeof formData.included === 'string'
                ? formData.included.split(',').map(item => item.trim())
                : formData.included,
            excluded: typeof formData.excluded === 'string'
                ? formData.excluded.split(',').map(item => item.trim())
                : formData.excluded,
            tour_location_images: typeof formData.tourLocationImages === 'string'
                ? formData.tourLocationImages.split(',').map(item => item.trim())
                : formData.tourLocationImages
        };
    
        console.log('Formatted Data:', formattedData);
    
        try {
            const result = await axiosSecure.patch(`/show-all-international-packages/${id}`, formattedData);
            
            if (result.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${formData.destination} has been Updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
    
                reset();
            }
        } catch (error) {
            console.log("Error details:", error.response?.data);
        }
    };
    
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Update Package</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">

                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label>Destination</label>
                        <input {...register('destination', { required: true })} className="w-full p-2 border" />
                    </div>
                    <div className="w-1/2">
                        <label>Price Amount</label>
                        <input {...register('amount', { required: true })} className="w-full p-2 border" />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label>Currency</label>
                        <input {...register('currency', { required: true })} className="w-full p-2 border" />
                    </div>
                    <div className="w-1/2">
                        <label>Per</label>
                        <input {...register('per', { required: true })} className="w-full p-2 border" />
                    </div>
                </div>

                <div>
                    <label>Rating</label>
                    <input {...register('rating')} className="w-full p-2 border" />
                </div>

                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label>Date Range</label>
                        <input {...register('dateRange')} className="w-full p-2 border" />
                    </div>
                    <div className="w-1/2">
                        <label>Duration</label>
                        <input {...register('duration')} className="w-full p-2 border" />
                    </div>
                </div>

                <div>
                    <label>Location</label>
                    <input {...register('location')} className="w-full p-2 border" />
                </div>

                <div>
                    <label>Image URL</label>
                    <input {...register('image')} className="w-full p-2 border" />
                </div>

                <div>
                    <label>Included Services (comma separated)</label>
                    <input {...register('includedServices')} className="w-full p-2 border" />
                </div>

                <div>
                    <label>Overview</label>
                    <textarea {...register('overview')} className="w-full p-2 border"></textarea>
                </div>

                <div>
                    <label>Included (comma separated)</label>
                    <input {...register('included')} className="w-full p-2 border" />
                </div>

                <div>
                    <label>Excluded (comma separated)</label>
                    <input {...register('excluded')} className="w-full p-2 border" />
                </div>

                <div>
                    <label>Tour Location Images (comma separated URLs)</label>
                    <input {...register('tourLocationImages')} className="w-full p-2 border" />
                </div>

                <button type="submit" className="w-full py-2 mt-4 bg-orange-500 text-white hover:bg-blue-700">Update Package</button>
            </form>
        </div>
    );
};

export default UpdateIntPackage;

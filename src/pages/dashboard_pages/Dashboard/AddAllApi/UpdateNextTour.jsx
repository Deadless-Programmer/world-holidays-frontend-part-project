import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';

const UpdateNextTour = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { control,setValue, handleSubmit,  } = useForm({
    defaultValues: {
      destination: '',
      price: { amount: '', currency: 'USD', per: 'adult' },
      rating: 0,
      category: '',
      date_range: '',
      duration: '',
      location: '',
      image: '',
      CoverImage: '',
      included_services: [],
      overview: '',
      included: [],
      excluded: [],
      tour_location_images: [] 
    }
  });


  const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch(`https://world-holidays-backend-part-two.vercel.app/show-all-next_tour/${id}`);
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

      const onSubmit = async(data) => {
        const formattedData = {
          ...data,
          rating: parseFloat(data.rating),
          included_services: Array.isArray(data.included_services) 
                             ? data.included_services 
                             : data.included_services.split(',').map(item => item.trim()),
          included: Array.isArray(data.included) 
                    ? data.included 
                    : data.included.split(',').map(item => item.trim()),
          excluded: Array.isArray(data.excluded) 
                    ? data.excluded 
                    : data.excluded.split(',').map(item => item.trim()),
          tour_location_images: Array.isArray(data.tour_location_images) 
                                ? data.tour_location_images 
                                : data.tour_location_images.split(',').map(item => item.trim())
        };
        console.log(formattedData);
    
        try {
            const result = await axiosSecure.patch(`/show-all-next_tour/${id}`, formattedData);
            
            if (result.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.destination} has been Updated`,
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





  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    width: '100%',
    marginTop: '4px'
  };

  const labelStyle = {
    marginBottom: '6px',
    fontWeight: 'bold'
  };

  return (
    <>
    <h1 className='text-3xl font-playfair md:pl-20 py-4 pl-4'>Update Your Next Tour Data</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '800px', margin: 'auto', padding: '20px', border: '1px solid #ddd' }}>
      {/* Two-Line Flex Group */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Destination</label>
          <Controller name="destination" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Price Amount</label>
          <Controller
                       name="price.amount"
                       control={control}
                       render={({ field: { value, onChange, onBlur, ref } }) => {
                         const formatWithComma = (val) => {
                          const raw = val?.toString().replace(/,/g, '');
                           if (!isNaN(raw) && raw !== "") {
                             return Number(raw).toLocaleString("en-BD");
                           }
                           return "";
                         };
         
                         const handleChange = (e) => {
                           const raw = e.target.value.replace(/,/g, "");
                           if (!isNaN(raw)) {
                             onChange(raw); // এইখানে save হচ্ছে clean value (44999)
                           }
                         };
         
                         return (
                           <input
                             type="text"
                             inputMode="numeric"
                             pattern="[0-9,]*"
                             style={inputStyle}
                             ref={ref}
                             value={formatWithComma(value)}
                             onChange={handleChange}
                             onBlur={onBlur}
                           />
                         );
                       }}
                     />
        </div>
      </div>

      {/* Four-Line Flex Group */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Currency</label>
          <Controller name="price.currency" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Rating</label>
          <Controller name="rating" control={control} render={({ field }) => <input type="number" step="0.1" style={inputStyle} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Category</label>
          <Controller name="category" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Date</label>
          <Controller name="date_range" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>
      </div>

      {/* Two-Line Flex Group */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Duration</label>
          <Controller name="duration" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Location</label>
          <Controller name="location" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>
      </div>

      {/* Two-Line Flex Group */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Main Image URL</label>
          <Controller name="image" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Cover Image URL</label>
          <Controller name="CoverImage" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>
      </div>

      {/* Three-Line Flex Group */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Overview</label>
          <Controller name="overview" control={control} render={({ field }) => <textarea style={{ ...inputStyle, height: '100px' }} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Included Services (Comma Separated)</label>
          <Controller name="included_services" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>
      </div>

      {/* Three-Line Flex Group */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Included (Comma Separated)</label>
          <Controller name="included" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Excluded (Comma Separated)</label>
          <Controller name="excluded" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>
      </div>

      {/* New field for tour location images */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Tour Location Images (Comma Separated URLs)</label>
        <Controller name="tour_location_images" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
      </div>

      <div>
        <button type="submit" className='bg-orange-400 hover:bg-orange-600' style={{ padding: '10px 20px', border: 'none', color: '#fff', cursor: 'pointer' }}>Update Next Tour</button>
      </div>
    </form>
    </>
  );
};

export default UpdateNextTour;

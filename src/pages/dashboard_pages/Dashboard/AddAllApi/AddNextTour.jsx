import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AddNextTour = () => {
  const axiosSecure = useAxiosSecure();
  const { control, handleSubmit,  } = useForm({
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

  const onSubmit = async(data) => {
    const formattedData = {
      ...data,
      rating: parseFloat(data.rating),
      included_services: data.included_services.split(',').map(item => item.trim()),
      included: data.included.split(',').map(item => item.trim()),
      excluded: data.excluded.split(',').map(item => item.trim()),
      tour_location_images: data.tour_location_images.split(',').map(item => item.trim())
    };
    console.log(formattedData);


    const reult = await axiosSecure.post("/next_tour" ,formattedData ).catch((error) => {
              console.log("Error details:", error.response?.data); 
            });
               if(reult.data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Next Tour has been saved to database",
                  showConfirmButton: false,
                  timer: 1500
                });
      
                reset();
              }
  };

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
    <h1 className='text-3xl font-playfair md:pl-20 py-4 pl-4'>Add Your Next Tour Data</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '800px', margin: 'auto', padding: '20px', border: '1px solid #ddd' }}>
      {/* Two-Line Flex Group */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Destination</label>
          <Controller name="destination" control={control} render={({ field }) => <input style={inputStyle} {...field} />} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Price Amount</label>
          <Controller name="price.amount" control={control} render={({ field }) => <input type="number" style={inputStyle} {...field} />} />
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
        <button type="submit" className='bg-orange-400 hover:bg-orange-600' style={{ padding: '10px 20px', border: 'none', color: '#fff', cursor: 'pointer' }}>Create Next Tour</button>
      </div>
    </form>
    </>
  );
};

export default AddNextTour;

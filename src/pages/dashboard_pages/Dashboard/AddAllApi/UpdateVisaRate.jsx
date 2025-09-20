import React, { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

 function UpdateVisaRate() {

   
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
  const {
    register,
    control,
    handleSubmit,
    reset, setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      visaFee: "",
      Requirment: [{ value: "" }],
      country_location_images: [{ value: "" }],
      src: "",
      overview: ""
    }
  });

  const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
      useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://world-holidays-backend-part-two.vercel.app/show-visa-processing-fee/${id}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();

      // format করার জায়গা
      if (result.Requirment) {
        result.Requirment = result.Requirment.map((r) => ({ value: r }));
      }
      if (result.country_location_images) {
        result.country_location_images = result.country_location_images.map((i) => ({ value: i }));
      }

      Object.keys(result).forEach((key) => setValue(key, result[key]));

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  fetchData();
}, [id, setValue]);

  




  const { fields: reqFields, append: appendReq, remove: removeReq } = useFieldArray({
    control,
    name: "Requirment"
  });

  const {
    fields: imgFields,
    append: appendImg,
    remove: removeImg
  } = useFieldArray({
    control,
    name: "country_location_images"
  });

  const onSubmit = async(data) => {
    const formattedData = {
      name: data.name,
      visaFee: Number(data.visaFee),
      Requirment: data.Requirment.map((r) => r.value),
      country_location_images: data.country_location_images.map((i) => i.value),
      src: data.src,
      overview: data.overview
    };
    // console.log("Generated JSON:", JSON.stringify(formattedData, null, 2));
  const result = await axiosSecure.patch(`/show-visa-processing-fee/${id}`, formattedData).catch((error) => {
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
        <div className="max-w-2xl mx-auto p-6 bg-white  shadow-md">
          <h2 className="text-2xl font-bold mb-4">Update Visa Rate For Country</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-full border px-3 py-2 rounded"
            />
    
            {/* <input
              placeholder="Visa Fee"
              type="number"
              {...register("visaFee", { required: true })}
              className="w-full border px-3 py-2 rounded"
            /> */}


 <Controller
          name="visaFee"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              inputMode="numeric"
              placeholder="Visa Fee"
              value={
                field.value
                  ? new Intl.NumberFormat("en-BD").format(field.value)
                  : ""
              }
              onChange={(e) => {
                const raw = e.target.value.replace(/,/g, ""); // কমা বাদ
                if (!isNaN(raw)) {
                  field.onChange(Number(raw));
                }
              }}
              className="w-full border px-3 py-2 rounded"
            />
          )}
        />

            



    
            <input
              placeholder="Main Image URL (src)"
              {...register("src", { required: true })}
              className="w-full border px-3 py-2 rounded"
            />
    
            <textarea
              placeholder="Overview"
              {...register("overview", { required: true })}
              className="w-full border px-3 py-2 rounded"
            />
    
            <div>
              <label className="font-semibold">Requirements:</label>
              {reqFields.map((field, index) => (
                <div key={field.id} className="flex items-center mb-2">
                  <input
                    placeholder={`Requirement ${index + 1}`}
                    {...register(`Requirment.${index}.value`, { required: true })}
                    className="w-full border px-3 py-2 rounded"
                  />
                  <button type="button" onClick={() => removeReq(index)} className="ml-2 text-red-500">✖</button>
                </div>
              ))}
              <button type="button" onClick={() => appendReq({ value: "" })} className="text-blue-500 mt-1">
                + Add Requirement
              </button>
            </div>
    
            <div>
              <label className="font-semibold">Country Location Images (Max: 2):</label>
              {imgFields.map((field, index) => (
                <div key={field.id} className="flex items-center mb-2">
                  <input
                    placeholder={`Image URL ${index + 1}`}
                    {...register(`country_location_images.${index}.value`, { required: true })}
                    className="w-full border px-3 py-2 rounded"
                  />
                  <button type="button" onClick={() => removeImg(index)} className="ml-2 text-red-500">✖</button>
                </div>
              ))}
              {imgFields.length < 2 ? (
                <button type="button" onClick={() => appendImg({ value: "" })} className="text-blue-500 mt-1">
                  + Add Image
                </button>
              ) : (
                <p className="text-sm text-gray-500 mt-1">Maximum of 2 images allowed.</p>
              )}
            </div>
    
            <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
          </form>
        </div>
      );
  };



export default UpdateVisaRate;

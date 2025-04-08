import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

function Review() {

    const axiosSecure = useAxiosSecure();
  const { register, control, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: {
      items: [{ p_description: "", image: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  });

  const watchFields = watch("items");

  const onSubmit = async(data) => {
    console.log("Generated JSON:", data)
    // toast(JSON.stringify(data.items, null, 2));
    const formattedData = {
        image: data.items[0].image,
        
     p_description:data.items[0].p_description
      
       
    };

  const reult = await axiosSecure.post("/travelersReview" ,formattedData ).catch((error) => {
          console.log("Error details:", error.response?.data); 
        });
           if(reult.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thanks for your review",
              showConfirmButton: false,
              timer: 1500
            });
  
            reset();
          }


  };

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=0c8c604a60e77b9d277cb43270eabe48`, {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (result.success) {
        setValue(`items.${index}.image`, result.data.url);
        toast("Image uploaded successfully!");
      } else {
       toast("Failed to upload image.");
      }
    } catch (error) {
    //   console.error("Upload error:", error);
      toast("An error occurred during image upload.");
    }
  };

  return (
    <>
      <ToastContainer/>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Review to world holidays</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="border border-gray-300 rounded-lg p-4 space-y-4 shadow-sm bg-white">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter description"
                {...register(`items.${index}.p_description`)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full"
                onChange={(e) => handleImageUpload(e, index)}
              />
              {watchFields?.[index]?.image && (
                <img
                  src={watchFields[index].image}
                  alt="Uploaded Preview"
                  className="mt-2 rounded-md max-h-40"
                />
              )}
            </div>

            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => append({ p_description: "", image: "" })}
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
          >
            + Add Entry
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-orange-500"
          >
            Give Review
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Review;

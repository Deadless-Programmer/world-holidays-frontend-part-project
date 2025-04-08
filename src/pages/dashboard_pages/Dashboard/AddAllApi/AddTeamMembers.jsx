import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


export default function AddTeamMembers() {

    const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
   
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit = async(data) => {
    const memberData = {
      name: data.name,
      designation: data.designation,
      img: data.img || preview,
    };

    console.log("New Member:", memberData);

    const reult = await axiosSecure.post("/ourTeamMembers" ,memberData ).catch((error) => {
                  console.log("Error details:", error.response?.data); 
                });
                   if(reult.data.insertedId){
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${data.name} has been added as member on world holidays team`,
                      showConfirmButton: false,
                      timer: 1500
                    });
          
                    reset();
                  }
    
    reset();
   
  };




  return (
    <div className=" mt-10">

    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg ">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Member</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="mt-1 w-full  border p-2"
            placeholder="Enter full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Designation</label>
          <input
            type="text"
            {...register("designation", {
              required: "Designation is required",
            })}
            className="mt-1 w-full  border p-2"
            placeholder="e.g. Manager"
          />
          {errors.designation && (
            <p className="text-red-500 text-sm mt-1">
              {errors.designation.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="url"
            {...register("img")}
            className="mt-1 w-full border p-2"
            placeholder="Paste image URL"
          />
        </div>

       

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3  hover:bg-orange-500 transition"
        >
          Create Member
        </button>
      </form>
    </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function UpdateteamMembers() {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      designation: '',
      img: '',
    }
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://world-holidays-backend-part-two.vercel.app/show-ourTeamMembers/${id}`);
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

  const onSubmit = async (data) => {
    const memberData = {
      name: data.name,
      designation: data.designation,
      img: data.img, // removed fallback to preview
    };

    try {
      const result = await axiosSecure.patch(`/show-ourTeamMembers/${id}`, memberData);

      if (result.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
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
    <div className="mt-10">
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Member's Info</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 w-full border p-2"
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
              className="mt-1 w-full border p-2"
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
            className="w-full bg-blue-600 text-white p-3 hover:bg-orange-500 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateteamMembers;

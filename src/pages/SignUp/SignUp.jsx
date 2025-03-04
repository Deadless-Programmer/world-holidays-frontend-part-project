import React from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const SignUp = ( {isSignUp,setIsSignUp}) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div><form onSubmit={handleSubmit(onSubmit)}
    className={`absolute top-44 md:top-0 md:left-0  h-full w-full md:w-1/2 transition-all duration-600 ease-in-out flex flex-col items-center justify-center p-10 ${isSignUp ? "opacity-100 z-10" : "opacity-0 z-0"}`}
  >
    <h1 className="text-xl font-bold font-playfair">Create Account</h1>
    <div className="flex space-x-2 my-3">
    <Link href="#" className="p-2 border rounded-full"><FaFacebook /></Link>
    <Link href="#" className="p-2 border rounded-full"><FcGoogle /></Link>
    </div>
    <span className="text-sm">or use your email for registration</span>
    <input type="text" {...register("firstName", { required: true })} placeholder="Name" className="mt-2 px-4 py-2 bg-gray-100 outline-none  w-full" />
    {errors.firstName?.type === "required" && (
        <p className='mt-2 text-red-500' role="alert">Please input your name</p>
      )}
    <input type="email" {...register("email", { required: true })} placeholder="Email" className="mt-2 px-4 py-2 bg-gray-100 outline-none  w-full" />
    {errors.email?.type === "required" && (
        <p className='mt-2 text-red-500' role="alert">Please input your email</p>
      )}
    <input type="password" {...register("password", { required: true,minLength:8, maxLength: 20 }, )} placeholder="Password" className="mt-2 px-4 py-2 bg-gray-100 outline-none w-full" />

    {errors.password?.type === "required" && (
        <p className='mt-2 text-red-500' role="alert">Please input your valid password</p>
      )}
    {errors.password?.type === "minLength" && (
        <p className='mt-2 text-red-500' role="alert">Password should be atleast 6 digits</p>
      )}
    {errors.password?.type === "maxLength" && (
        <p className='mt-2 text-red-500' role="alert">Password should be below 20 digits</p>
      )}
    <button type='submit' className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-full" onClick={() => setIsSignUp(true)}>Sign Up</button>
  </form></div>
  )
}

export default SignUp
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic'

const SignUp = ( {isSignUp,setIsSignUp}) => {
  const {createUser, signInWithGoogle, updateUserProfile}=useContext(AuthContext);
  const navigate = useNavigate();
  const location_path = useLocation();
   const axiosPublic = useAxiosPublic();

  const from = location_path.state?.from?.pathname ||'/';
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();

  const onSubmit = (data) => {

    console.log(data)
    createUser(data.email, data.password).then(result=>{
      updateUserProfile(data.firstName, data?.photoURL ? data.photoURL:null).then(result=>{

        const userInfo = {
          name: data.firstName,
          email:data.email
        }
        axiosPublic.post('/users', userInfo).then(res=>{
          if(res.data.insertedId){
            console.log('user added to the database')
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User has created successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from,{replace:true});
          }
        })
     
      }).catch(err=>console.log(err))
      
    })
  };
   const handleGoogleLogin =()=>{
        signInWithGoogle().then(result=>{
          console.log(result)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User has Logged successfully",
            showConfirmButton: false,
            timer: 1500
          });
    navigate(from,{replace:true});
         
        }).catch(err=>{
          console.log(err)
        })
      }
  return (
    <div><form onSubmit={handleSubmit(onSubmit)}
    className={`absolute top-44 md:top-0 md:left-0  h-full w-full md:w-1/2 transition-all duration-600 ease-in-out flex flex-col items-center justify-center p-10 ${isSignUp ? "opacity-100 z-10" : "opacity-0 z-0"}`}
  >
    <h1 className="text-xl font-bold font-playfair">Create Account</h1>
    <div className="flex space-x-2 my-3">
    <Link href="#" className="p-2 border rounded-full"><FaFacebook /></Link>
    <Link onClick={handleGoogleLogin} className="p-2 border rounded-full"><FcGoogle /></Link>
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
        <p className='mt-2 text-red-500' role="alert">Password should be atleast 8 digits</p>
      )}
    {errors.password?.type === "maxLength" && (
        <p className='mt-2 text-red-500' role="alert">Password should be below 20 digits</p>
      )}
    <button type='submit' className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-full" onClick={() => setIsSignUp(true)}>Sign Up</button>
  </form></div>
  )
}

export default SignUp
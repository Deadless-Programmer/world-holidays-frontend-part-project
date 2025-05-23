import React, { useContext } from 'react'
import SignInUpForm from '../../components/SignInUpForm'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../providers/AuthProviders'
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic'

const Login = ({isSignUp,setIsSignUp}) => {
const{sighIn, signInWithGoogle}=useContext(AuthContext);
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
      sighIn(data.email, data.password).then(result=>{
        console.log(result);
        reset();
           Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User has Logged successfully",
                showConfirmButton: false,
                timer: 1500
              });
        navigate(from,{replace:true});
      })
    }


    const handleGoogleLogin =()=>{
      signInWithGoogle().then(result=>{
       const userInfo ={
                    name : result.user.displayName,
                    email: result.user.email
                 };
       
                 axiosPublic.post('/users', userInfo).then(res=> {
                   console.log(res.data)
                   Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "User has Logged successfully",
                     showConfirmButton: false,
                     timer: 1500
                   });
             navigate(from,{replace:true});
                 })
       
      }).catch(err=>{
        console.log(err)
      })
    }
  return (
   <>
    <form onSubmit={handleSubmit(onSubmit)}
          className={`absolute top-44 md:top-0 h-full md:w-1/2 w-full transition-all duration-600 ease-in-out flex flex-col items-center justify-center p-10 ${isSignUp ? "opacity-0 z-0" : "opacity-100 z-10"}`}
        >
          <h1 className="text-xl font-bold font-playfair">Sign in</h1>
          <div className="flex space-x-2 my-3">
            <Link  className="p-2 border rounded-full"><FaFacebook /></Link>
            <Link onClick={handleGoogleLogin}  className="p-2 border rounded-full"><FcGoogle /></Link>
            {/* <Link href="#" className="p-2 border rounded-full"><i className="fab fa-linkedin-in"></i></Link> */}
          </div>
          <span className="text-sm">or use your account</span>
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
          <a href="#" className="text-sm mt-2">Forgot your password?</a>
          <button type='submit' className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-full" onClick={() => setIsSignUp(false)}>Sign In</button>
        </form>
   </>
  )
}

export default Login        
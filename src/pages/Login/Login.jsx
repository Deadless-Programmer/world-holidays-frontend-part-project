import React from 'react'
import SignInUpForm from '../../components/SignInUpForm'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const Login = ({isSignUp,setIsSignUp}) => {
  return (
   <>
    <div
          className={`absolute top-44 md:top-0 h-full md:w-1/2 w-full transition-all duration-600 ease-in-out flex flex-col items-center justify-center p-10 ${isSignUp ? "opacity-0 z-0" : "opacity-100 z-10"}`}
        >
          <h1 className="text-xl font-bold font-playfair">Sign in</h1>
          <div className="flex space-x-2 my-3">
            <Link href="#" className="p-2 border rounded-full"><FaFacebook /></Link>
            <Link href="#" className="p-2 border rounded-full"><FcGoogle /></Link>
            {/* <Link href="#" className="p-2 border rounded-full"><i className="fab fa-linkedin-in"></i></Link> */}
          </div>
          <span className="text-sm">or use your account</span>
          <input type="email" placeholder="Email" className="mt-2 px-4 py-2 bg-gray-100 outline-none  w-full" />
          <input type="password" placeholder="Password" className="mt-2 px-4 py-2 bg-gray-100 outline-none w-full" />
          <a href="#" className="text-sm mt-2">Forgot your password?</a>
          <button className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-full" onClick={() => setIsSignUp(false)}>Sign In</button>
        </div>
   </>
  )
}

export default Login        
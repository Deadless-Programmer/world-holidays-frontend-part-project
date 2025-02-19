import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const SignUp = ( {isSignUp,setIsSignUp}) => {
  return (
    <div><div
    className={`absolute top-44 md:top-0 md:left-0  h-full w-full md:w-1/2 transition-all duration-600 ease-in-out flex flex-col items-center justify-center p-10 ${isSignUp ? "opacity-100 z-10" : "opacity-0 z-0"}`}
  >
    <h1 className="text-xl font-bold font-playfair">Create Account</h1>
    <div className="flex space-x-2 my-3">
    <Link href="#" className="p-2 border rounded-full"><FaFacebook /></Link>
    <Link href="#" className="p-2 border rounded-full"><FcGoogle /></Link>
    </div>
    <span className="text-sm">or use your email for registration</span>
    <input type="text" placeholder="Name" className="mt-2 px-4 py-2 bg-gray-100 outline-none  w-full" />
    <input type="email" placeholder="Email" className="mt-2 px-4 py-2 bg-gray-100 outline-none  w-full" />
    <input type="password" placeholder="Password" className="mt-2 px-4 py-2 bg-gray-100 outline-none w-full" />
    <button className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-full" onClick={() => setIsSignUp(true)}>Sign Up</button>
  </div></div>
  )
}

export default SignUp
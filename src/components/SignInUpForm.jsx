import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`md:flex flex-col items-center justify-center min-h-screen bg-gray-100 font-[Nunito]`}>
      {/* <h2 className="text-2xl font-[Playfair Display] mb-4">Weekly Coding Challenge #1: Sign in/up Form</h2> */}
      <div className="relative w-[768px] max-w-full min-h-[480px] bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out flex flex-col items-center justify-center p-10 ${isSignUp ? "opacity-0 z-0" : "opacity-100 z-10"}`}
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
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out flex flex-col items-center justify-center p-10 ${isSignUp ? "opacity-100 z-10" : "opacity-0 z-0"}`}
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
        </div>
        <div className={`absolute   right-0 top-0 h-full w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white flex flex-col items-center justify-center p-10` }>
          {isSignUp ? (
            <>
              <h1 className="text-2xl font-bold font-playfair">Welcome Back!</h1>
              <p className="text-sm my-2 text-center">To keep connected with us please login with your personal info</p>
              <button className="mt-3 border border-white px-6 py-2 rounded-full" onClick={() => setIsSignUp(false)}>Sign In</button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold font-playfair">Hello, Friend!</h1>
              <p className="text-sm my-2 text-center">Enter your personal details and start your journey with us</p>
              <button className="mt-3 border border-white px-6 py-2 rounded-full" onClick={() => setIsSignUp(true)}>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

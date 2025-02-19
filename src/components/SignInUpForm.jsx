import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
// import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`md:flex md:flex-col items-center justify-center min-h-screen bg-gray-100 font-[Nunito]`}>
      {/* <h2 className="text-2xl font-[Playfair Display] mb-4">Weekly Coding Challenge #1: Sign in/up Form</h2> */}
      <div className="relative w-[768px] max-w-full min-h-[480px] h-[820px] md:h-full  bg-white  shadow-lg overflow-hidden flex">
      <Login isSignUp ={isSignUp} setIsSignUp={setIsSignUp}/>
        <SignUp isSignUp ={isSignUp} setIsSignUp={setIsSignUp} />
        <div className={`absolute  z-10  right-0 top-0 md:h-full min-h-[360px] md:w-1/2 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex flex-col items-center justify-center p-10` }>
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

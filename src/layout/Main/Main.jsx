import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../pages/Shared/Footer'
import Navbar from '../../pages/Shared/Navbar'

const Main = () => {
  const location = useLocation();

  const noHeaderFooter = location.pathname.includes("/signInUpForm")
  return (
    <div>
        {noHeaderFooter || <Navbar/>}
        <Outlet></Outlet>
       {noHeaderFooter || <Footer/>}
    </div>
  )
}

export default Main;
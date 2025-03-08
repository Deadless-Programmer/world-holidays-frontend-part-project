import React from 'react'
import { BsTicketPerforated } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiLocationArrow1, CiLocationOn } from 'react-icons/ci'
import { GrServices } from 'react-icons/gr'
import { IoHomeOutline, IoTicketOutline } from 'react-icons/io5'
import { MdOutlineLocalLaundryService, MdOutlineShoppingCart } from 'react-icons/md'
import { PiPackageLight, PiPackageThin } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { AiOutlineLogout } from 'react-icons/ai'
import useIntPackageCart from '../../../hooks/useIntPackageCart'
import { motion } from "motion/react"
const Sidebar = () => {
     const {user, logOut}=useAuth();
     const [intCart] = useIntPackageCart();

     const handleLogOut =()=>{
        logOut().then({}).catch(err=>{
          console.log(err)
        })
      }
  return (
    <div>


<NavLink to={"int-packages"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><MdOutlineShoppingCart className='text-lg'  /> My International packages <motion.span animate={{color:['#FFA500', '#fbff03','#66ff03']}} transition={{duration:1.5, repeat:Infinity}} >{intCart?.length}</motion.span> </NavLink>
<NavLink to={"dom-packages"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><PiPackageThin className='text-lg'  />My Domestice packages</NavLink>
<NavLink to={"next-tour"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><CiLocationArrow1 className='text-lg'  /> My Next Tour</NavLink>
<NavLink to={"popular-destination"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><CiLocationOn className='text-lg'  /> My Popular Destinanation</NavLink>
<NavLink to={"dom-ticket"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><BsTicketPerforated className='text-lg'  /> My Domestick Ticket</NavLink>
<NavLink to={"int-ticket"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><IoTicketOutline className='text-lg'  /> My International Ticket <motion.span animate={{color:['#FFA500', '#fbff03','#66ff03']}} transition={{duration:1.5, repeat:Infinity}} >{intCart?.length}</motion.span> </NavLink>
<NavLink to={"others-service"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><MdOutlineLocalLaundryService className='text-lg'  /> My Others Service</NavLink>
<div className="divider"></div>
<NavLink to={"/dashboard"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><CgProfile className='text-lg'  /> {user?.displayName}</NavLink>
<NavLink to={"/"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><IoHomeOutline className='text-lg'  /> Home</NavLink>
<NavLink to={"/packages"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><PiPackageLight className='text-lg'  /> Packages</NavLink>
<NavLink to={"/services"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><GrServices className='text-lg'  /> Service</NavLink>
<NavLink onClick={handleLogOut} to={"/signInUpForm"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><AiOutlineLogout className='text-lg'  /> Logout</NavLink>

    </div>
  )
}

export default Sidebar
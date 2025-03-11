import React from 'react'
import { BsTicketPerforated } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiLocationArrow1, CiLocationOn } from 'react-icons/ci'
import { GrServices } from 'react-icons/gr'
import { IoHomeOutline, IoTicketOutline } from 'react-icons/io5'
import { LiaUsersSolid } from "react-icons/lia";
import { TbLayoutGridAdd } from "react-icons/tb";
import { MdOutlineLocalLaundryService, MdOutlineShoppingCart } from 'react-icons/md'
import { PiPackageLight, PiPackageThin } from 'react-icons/pi'
import { TbSettingsSpark } from "react-icons/tb";
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { AiOutlineLogout } from 'react-icons/ai'
import useIntPackageCart from '../../../hooks/useIntPackageCart'
import { motion } from "motion/react"
import useDomPackageCart from '../../../hooks/useDomPackageCart'
import useNextTour from '../../../hooks/useNextTour'
import usePopularDestination from '../../../hooks/usePopularDestination'
import useTicketCart from '../../../hooks/useTicketCart'
import { FaUsers } from 'react-icons/fa6'
import useAdmin from '../../../hooks/useAdmin'
const Sidebar = () => {
     const {user, logOut}=useAuth();
     const [intCart] = useIntPackageCart();
     const [domCart]= useDomPackageCart();
     const [nextTourCart]=useNextTour();
       const[popularDesCart]=usePopularDestination();
       const[ticketCart]=useTicketCart();

       const [isAdmin] = useAdmin();
     const handleLogOut =()=>{
        logOut().then({}).catch(err=>{
          console.log(err)
        })
      }
  return (
    <div className=''>

  {
    isAdmin ? <>
    
    <NavLink to={"add-packages"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><TbSettingsSpark  className='text-lg'  /> Add Packages </NavLink>
    <NavLink to={"add-next-tour"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><TbLayoutGridAdd  className='text-lg'  /> Add Next Tour </NavLink>
    <NavLink to={"all-users"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><FaUsers className='text-lg'  /> All Users </NavLink>
    
    
    </> :<>
    
    <NavLink to={"int-packages"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><MdOutlineShoppingCart className='text-lg'  /> My International packages <motion.span animate={{color:['#FFA500', '#fbff03','#66ff03']}} transition={{duration:1.5, repeat:Infinity}} >{intCart?.length}</motion.span> </NavLink>
<NavLink to={"dom-packages"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><PiPackageThin className='text-lg'  />My Domestice packages  <motion.span animate={{color:['#FFA500', '#fbff03','#66ff03']}} transition={{duration:1.5, repeat:Infinity}} >{domCart?.length}</motion.span></NavLink>
<NavLink to={"next-tour"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><CiLocationArrow1 className='text-lg'  /> My Next Tour <motion.span animate={{color:['#FFA500', '#fbff03','#66ff03']}} transition={{duration:1.5, repeat:Infinity}} >{nextTourCart?.length}</motion.span> </NavLink>
<NavLink to={"popular-destination"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><CiLocationOn className='text-lg'  /> My Popular Destinanation <motion.span animate={{color:['#FFA500', '#fbff03','#66ff03']}} transition={{duration:1.5, repeat:Infinity}} >{popularDesCart?.length}</motion.span> </NavLink>

<NavLink to={"my-ticket-cart"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><IoTicketOutline className='text-lg'  /> My Ticket Cart <motion.span animate={{color:['#FFA500', '#fbff03','#66ff03']}} transition={{duration:1.5, repeat:Infinity}} >{ticketCart?.length}</motion.span> </NavLink>
<NavLink to={"others-service"} className='flex items-center gap-2 font-nunito text-sm font-semibold p-2'><MdOutlineLocalLaundryService className='text-lg'  /> My Others Service</NavLink>
    
    
    </>
  }
 
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
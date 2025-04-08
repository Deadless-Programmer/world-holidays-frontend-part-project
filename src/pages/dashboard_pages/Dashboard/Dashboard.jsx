import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import DashboardCoverImage from '../../../components/DashboardCoverImage/DashboardCoverImage'

const Dashboard = () => {
  const location = useLocation();
  const showCoverImage = location.pathname === "/dashboard";
  console.log(location)
  return (
    <div className='md:grid grid-cols-12 gap-5 max-w-7xl mx-auto'>
        <div className='col-span-3 bg-orange-100 overflow-x-auto'>
            <Sidebar/>
        </div>
        <div className='col-span-9 '>
         {showCoverImage && <DashboardCoverImage />}
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard
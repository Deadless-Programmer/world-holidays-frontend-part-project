import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='md:grid grid-cols-12 gap-5 max-w-7xl mx-auto'>
        <div className='col-span-3 bg-orange-100 overflow-x-auto'>
            <Sidebar/>
        </div>
        <div className='col-span-9 bg-orange-50'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard
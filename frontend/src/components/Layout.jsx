import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
const Layout = () => {
  return (
    <div className='flex w-screen'>
      <div className='w-[17%]'>
        <Sidebar />
      </div>
      <main className='flex-1 w-[83%]'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
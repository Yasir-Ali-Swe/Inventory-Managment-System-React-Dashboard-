import React from 'react'
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineTrendingUp } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen w-full px-2'>
      <div className='DashboardHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Overall System Overview</h1>
      </div>
      <div className="DashboardCards mt-2  grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2">
        <div onClick={() => navigate('/analytics')} className='sales h-[160px] bg-yellow flex justify-center flex-col gap-3 rounded-xl cursor-pointer'>
          <div className='flex justify-center items-center gap-2'>
            <FaMoneyBill1Wave className='text-4xl font-black text-primary ' />
            <div className='flex justify-center items-center'>
              <h1 className='text-3xl text-primary font-bold'>100,000 </h1>
              <MdOutlineTrendingUp className='text-2xl font-black text-primary' />
            </div>

          </div>
          <h1 className='text-4xl text-primary font-bold text-center'>Total Sales</h1>
        </div>
        <div onClick={() => navigate('/products')} className='products h-[160px] bg-green flex justify-center flex-col gap-3 rounded-xl cursor-pointer'>
          <div className='flex justify-center items-center gap-2'>
            <MdOutlineProductionQuantityLimits className='text-5xl font-black text-red ' />
            <h1 className='text-4xl text-red font-bold'>300+</h1>
          </div>
          <h1 className='text-4xl text-red font-bold text-center'>Total Products</h1>
        </div>
        <div onClick={() => navigate('/categories')} className='categories h-[160px] bg-red flex justify-center flex-col gap-3 rounded-xl cursor-pointer'>
          <div className='flex justify-center items-center gap-2'>
            <MdOutlineCategory className='text-5xl font-black text-yellow ' />
            <h1 className='text-4xl text-yellow font-bold'>50+</h1>
          </div>
          <h1 className='text-4xl text-yellow font-bold text-center'>Total Categories</h1>
        </div>
        <div onClick={() => navigate('/salesman')} className='salesman h-[160px] bg-blue flex justify-center flex-col gap-3 rounded-xl cursor-pointer'>
          <div className='flex justify-center items-center gap-2'>
            <FaUsers className='text-5xl font-black text-secondary ' />
            <h1 className='text-4xl text-secondary font-bold'>3</h1>
          </div>
          <h1 className='text-4xl text-secondary font-bold text-center'>Total salesman</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

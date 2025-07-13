import React from 'react'
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineTrendingUp } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { SalesmanSalesChart, TopThreeSalingProducts, MonthlySales } from '../components/index.jsx';


const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='DashboardHeader py-6 lg:py-11 bg-secondary rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0'>Overall System Overview</h1>
      </div>
      
      <div className="DashboardCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        <div onClick={() => navigate('/analytics')} className='sales h-[120px] lg:h-[160px] bg-yellow flex justify-center flex-col gap-2 lg:gap-3 rounded-xl cursor-pointer p-4 transition-transform hover:scale-105'>
          <div className='flex justify-center items-center gap-2'>
            <FaMoneyBill1Wave className='text-2xl lg:text-4xl font-black text-primary' />
            <div className='flex justify-center items-center'>
              <h1 className='text-xl lg:text-3xl text-primary font-bold'>100,000</h1>
              <MdOutlineTrendingUp className='text-lg lg:text-2xl font-black text-primary' />
            </div>
          </div>
          <h1 className='text-lg lg:text-4xl text-primary font-bold text-center'>Total Sales</h1>
        </div>
        
        <div onClick={() => navigate('/products')} className='products h-[120px] lg:h-[160px] bg-green flex justify-center flex-col gap-2 lg:gap-3 rounded-xl cursor-pointer p-4 transition-transform hover:scale-105'>
          <div className='flex justify-center items-center gap-2'>
            <MdOutlineProductionQuantityLimits className='text-3xl lg:text-5xl font-black text-red' />
            <h1 className='text-xl lg:text-4xl text-red font-bold'>300+</h1>
          </div>
          <h1 className='text-lg lg:text-4xl text-red font-bold text-center'>Total Products</h1>
        </div>
        
        <div onClick={() => navigate('/categories')} className='categories h-[120px] lg:h-[160px] bg-red flex justify-center flex-col gap-2 lg:gap-3 rounded-xl cursor-pointer p-4 transition-transform hover:scale-105'>
          <div className='flex justify-center items-center gap-2'>
            <MdOutlineCategory className='text-3xl lg:text-5xl font-black text-yellow' />
            <h1 className='text-xl lg:text-4xl text-yellow font-bold'>50+</h1>
          </div>
          <h1 className='text-lg lg:text-4xl text-yellow font-bold text-center'>Total Categories</h1>
        </div>
        
        <div onClick={() => navigate('/salesman')} className='salesman h-[120px] lg:h-[160px] bg-blue flex justify-center flex-col gap-2 lg:gap-3 rounded-xl cursor-pointer p-4 transition-transform hover:scale-105'>
          <div className='flex justify-center items-center gap-2'>
            <FaUsers className='text-3xl lg:text-5xl font-black text-secondary' />
            <h1 className='text-xl lg:text-4xl text-secondary font-bold'>3</h1>
          </div>
          <h1 className='text-lg lg:text-4xl text-secondary font-bold text-center'>Total Salesman</h1>
        </div>
      </div>
      
      <div className='charts flex flex-col lg:flex-row gap-4 lg:gap-6 mb-6'>
        <div className='w-full lg:w-[63%] h-[350px] lg:h-[400px]'>
          <SalesmanSalesChart />
        </div>
        <div className='w-full lg:w-[37%] h-[350px] lg:h-[400px]'>
          <TopThreeSalingProducts />
        </div>
      </div>
      
      <div className='w-full h-[350px] lg:h-[400px]'>
        <MonthlySales />
      </div>
    </div>
  )
}

export default Dashboard;

import React from 'react'
import {
  TopHighProfitProducts,
  TopThreeSalingProducts,
  MonthlySales,
  SalesmanSalesChart
} from '../components';

const Analytics = () => {
  return (
    <div className='min-h-screen w-full p-2 lg:p-4 overflow-hidden'>
      <div className='AnalyticsHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>
          Analytics
        </h1>
      </div>

      <div className='AnalyticsCards flex flex-col gap-4 lg:gap-6'>
        <div className='w-full h-[350px] lg:h-[400px]'>
          <MonthlySales />
        </div>
        
        <div className='w-full h-[350px] lg:h-[400px]'>
          <SalesmanSalesChart />
        </div>
        
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-6'>
          <div className='w-full lg:w-1/2 h-[350px] lg:h-[400px]'>
            <TopHighProfitProducts />
          </div>
          <div className='w-full lg:w-1/2 h-[350px] lg:h-[400px]'>
            <TopThreeSalingProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

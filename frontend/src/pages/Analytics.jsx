import React from 'react'
import {
  TopHighProfitProducts,
  TopThreeSalingProducts,
  MonthlySales,
  SalesmanSalesChart
} from '../components';

const Analytics = () => {
  return (
    <div className='h-screen w-full px-2 overflow-hidden'>
      <div className='AnalyticsHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>
          Analytics
        </h1>
      </div>

      <div className='AnalyticsCards mt-2 max-h-[650px] overflow-y-auto flex flex-col gap-5'>
        <div className='w-full h-[380px] my-3'>
          <MonthlySales />
        </div>
        <div className='w-full h-[400px] my-3'>
          <SalesmanSalesChart />
        </div>
        <div className='flex gap-5 my-3'>
          <div className='w-full md:w-1/2 h-[400px]'>
            <TopHighProfitProducts />
          </div>
          <div className='w-full md:w-1/2 h-[400px]'>
            <TopThreeSalingProducts />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;

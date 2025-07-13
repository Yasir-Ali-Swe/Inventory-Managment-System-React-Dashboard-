import React from 'react'
import { DummyCategoryData } from "./DummyData.js";

const Categories = () => {
  return (
    <div className='h-full w-full px-2'>
      <div className='CategoriesHeader py-[38px] bg-secondary flex justify-between px-3'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>
          Categories
        </h1>
        <button className='bg-green py-2 px-8 text-lg text-textColor rounded-lg cursor-pointer'>
          Add Category
        </button>
      </div>

      <div className="CategoriesData my-4 mx-3 flex justify-center text-textColor">
        <div className="table-container w-full max-w-full h-[500px] overflow-auto border border-textColor rounded-lg">
          <table className='w-full min-w-[1000px] table-fixed'>
            <thead className='bg-secondary text-textColor sticky top-0 z-10'>
              <tr>
                <th className='px-4 py-3 w-[60px] text-left whitespace-nowrap'>Index</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Name</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Products</th>
                <th className='px-4 py-3 w-[250px] text-left whitespace-nowrap'>Supplier</th>
                <th className='px-4 py-3 w-[150px] text-left whitespace-nowrap'>Sales</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                DummyCategoryData.map((category, index) => (
                  <tr 
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                  >
                    <td className='px-4 py-4 text-left'>{index + 1}</td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={category.name}>{category.name}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={category.products}>{category.products}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={category.supplier}>{category.supplier}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={category.sales}>${category.sales}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='flex items-center gap-2'>
                        <button className='bg-green py-1 px-3 text-sm text-textColor rounded-lg whitespace-nowrap'>Edit</button>
                        <button className='bg-red py-1 px-3 text-sm text-textColor rounded-lg whitespace-nowrap'>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Categories;

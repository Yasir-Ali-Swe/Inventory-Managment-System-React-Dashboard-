import React from 'react'
import { useState } from 'react'
const Categories = [
  { value: 'Select Category' ,},
  { value: 'Departmental' ,},
  { value: 'Medical' },
  { value: 'Electronics' },
  { value: 'Clothing' },
  { value: 'Cosmetics' },
  { value: 'Furniture' },
  { value: 'Stationary' },
  { value: 'Cosmetics' },
  { value: 'Toys' },
]


const Products = () => {
  const [selectedOption, setSelectedOption] = useState(Categories[0].value);
  return (
    <div className='bg-mainForground max-w-full mb-2 ml-2 mr-2 flex flex-col'>
      <div className='h-18 border-mainBg border-b-4 flex items-center'>
        <h1 className='ml-2 text-2xl font-bold text-textColor'>Products</h1>
      </div>
      <div className='mt-4 flex justify-center'>
        <div className=' mx-2 flex gap-2 items-center'>
          <input type="text" placeholder='Search Products' className='w-80 h-8 px-3 text-textColor font-medium border-mainBg border-2 my-2 focus:ring-0 focus:outline-0 focus:border-4' />
          <select
            name="category"
            className='w-80 h-8 px-3 text-textColor bg-mainForground font-medium border-mainBg border-2 my-2 focus:ring-0 focus:outline-0 focus:border-4'
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            {
              Categories.map((category, index) =>
                <option
                  key={index}
                  value={category.value}
                >
                  {category.value}
                </option>
              )
            }
          </select>
          <button className='border-green-700 border-2 h-8 px-8 text-textColor font-semibold hover:bg-green-900'>
            Add Product
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products;
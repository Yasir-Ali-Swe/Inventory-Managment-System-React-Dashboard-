import React, { useState } from 'react'
import { DummyCategoryData } from "../pages/DummyData.js";

const Category = ({ onEditCategory, onAddCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter categories based on search term
  const filteredCategories = DummyCategoryData.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleEditClick = (category) => {
    console.log('Edit button clicked for category:', category);
    onEditCategory(category);
  };

  const handleAddClick = () => {
    console.log('Add Category button clicked');
    onAddCategory();
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='CategoriesHeader py-6 lg:py-11 bg-secondary rounded-lg mb-4 flex flex-col lg:flex-row justify-between px-4 lg:px-6 gap-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>
          Categories
        </h1>
        <button 
          onClick={handleAddClick}
          className='bg-green py-2 px-4 lg:px-8 text-base lg:text-lg text-textColor rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors w-full lg:w-auto'
        >
          Add Category
        </button>
      </div>

      <div className='my-4 mx-2 lg:mx-3'>
        <div className="filters border-textColor border-1 p-3 lg:p-4 rounded-md flex items-center gap-3 lg:gap-5">
          <input 
            type="text" 
            placeholder='Search By Name or Supplier' 
            className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden my-4 mx-2">
        <div className="grid grid-cols-1 gap-3">
          {filteredCategories.map((category, index) => (
            <div key={index} className="bg-secondary rounded-lg p-4 border border-textColor">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-textColor text-lg">{category.name}</h3>
                <span className="px-2 py-1 rounded text-xs font-semibold bg-green text-textColor">
                  {category.products} products
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div>
                  <span className="text-textColor opacity-70">Supplier:</span>
                  <p className="font-semibold truncate">{category.supplier}</p>
                </div>
                <div>
                  <span className="text-textColor opacity-70">Sales:</span>
                  <p className="font-semibold">${category.sales}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEditClick(category)}
                  className='bg-green py-1 px-3 text-sm text-textColor rounded-lg flex-1'
                >
                  Edit
                </button>
                <button className='bg-red py-1 px-3 text-sm text-textColor rounded-lg flex-1'>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block CategoriesData my-4 mx-3 flex justify-center text-textColor">
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
                filteredCategories.map((category, index) => (
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
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEditClick(category);
                          }}
                          className='bg-green py-1 px-3 text-sm text-textColor rounded-lg whitespace-nowrap cursor-pointer'
                        >
                          Edit
                        </button>
                        <button className='bg-red py-1 px-3 text-sm text-textColor rounded-lg whitespace-nowrap cursor-pointer'>
                          Delete
                        </button>
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

export default Category; 
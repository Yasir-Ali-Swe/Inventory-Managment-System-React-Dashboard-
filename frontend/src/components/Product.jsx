import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DummyProductData } from "../pages/DummyData.js";

const Product = ({ onEditProduct, onAddProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const Options = [
    { value: "All", label: "Select Category (Default All)" },
    { value: "Electronics", label: "Electronics" },
    { value: "Clothing", label: "Clothing" },
    { value: "Furniture", label: "Furniture" },
    { value: "Books", label: "Books" },
    { value: "Sports", label: "Sports" },
    { value: "Toys", label: "Toys" },
    { value: "Health", label: "Health" },
    { value: "Beauty", label: "Beauty" },
    { value: "Home", label: "Home" },
  ];

  const getCategoryColor = (category) => {
    return category === 'Electronics' ? 'text-green' :
           category === 'Clothing' ? 'text-red' :
           category === 'Furniture' ? 'text-yellow' :
           category === 'Books' ? 'text-blue' :
           category === 'Sports' ? 'text-green' :
           category === 'Toys' ? 'text-yellow' :
           category === 'Health' ? 'text-green' :
           category === 'Beauty' ? 'text-red' :
           category === 'Home' ? 'text-blue' :
           'text-textColor';
  };

  const filteredProducts = DummyProductData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEditClick = (product) => {
    onEditProduct(product);
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='ProductHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>Manage All Products</h1>
      </div>
      
      <div className='my-4 mx-2 lg:mx-3'>
        <div className="filters border-textColor border-1 p-3 lg:p-4 rounded-md flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
          <input 
            type="text" 
            placeholder='Search By Name' 
            className='w-full lg:w-[30%] py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className='w-full lg:w-[30%] py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {
              Options.map((option) => (
                <option className='mt-2 bg-secondary text-textColor' key={option.value} value={option.value}>{option.label}</option>
              ))
            }
          </select>
          <button 
            onClick={onAddProduct} 
            className='w-full lg:w-auto bg-green py-2 px-4 lg:px-8 text-base lg:text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
          >
            Add Product
          </button>
        </div>
      </div>
      
      <div className="lg:hidden my-4 mx-2">
        <div className="grid grid-cols-1 gap-3">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-secondary rounded-lg p-4 border border-textColor">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-textColor text-lg">{product.name}</h3>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(product.category)}`}>
                  {product.category}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div>
                  <span className="text-textColor opacity-70">Purchase Price:</span>
                  <p className="font-semibold">${product.purchasePrice}</p>
                </div>
                <div>
                  <span className="text-textColor opacity-70">Sales Price:</span>
                  <p className="font-semibold">${product.salesPrice}</p>
                </div>
                <div>
                  <span className="text-textColor opacity-70">Quantity:</span>
                  <p className="font-semibold">{product.availableUnits}</p>
                </div>
                <div>
                  <span className="text-textColor opacity-70">Sold:</span>
                  <p className="font-semibold">{product.soldUnits}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEditClick(product)}
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

      <div className="hidden lg:block tableData my-4 mx-3 flex justify-center text-textColor">
        <div className="table-container w-full max-w-full h-[500px] overflow-auto border border-textColor rounded-lg">
          <table className='w-full min-w-[1200px] table-fixed'>
            <thead className='bg-secondary text-textColor sticky top-0 z-10'>
              <tr>
                <th className='px-4 py-3 w-[60px] text-left whitespace-nowrap'>Index</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Product Name</th>
                <th className='px-4 py-3 w-[120px] text-left whitespace-nowrap'>Category</th>
                <th className='px-4 py-3 w-[140px] text-left whitespace-nowrap'>Purchase Price</th>
                <th className='px-4 py-3 w-[120px] text-left whitespace-nowrap'>Sales Price</th>
                <th className='px-4 py-3 w-[140px] text-left whitespace-nowrap'>Units Purchased</th>
                <th className='px-4 py-3 w-[120px] text-left whitespace-nowrap'>Units Sold</th>
                <th className='px-4 py-3 w-[100px] text-left whitespace-nowrap'>Quantity</th>
                <th className='px-4 py-3 w-[150px] text-left whitespace-nowrap'>Supplier Contact</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredProducts.map((product, index) => (
                  <tr key={index} className={` ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}>
                    <td className='px-4 py-4 text-left'>{index + 1}</td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={product.name}>{product.name}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className={`truncate font-semibold ${getCategoryColor(product.category)}`} title={product.category}>{product.category}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={`$${product.purchasePrice}`}>${product.purchasePrice}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={`$${product.salesPrice}`}>${product.salesPrice}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={product.soldUnits + product.availableUnits}>{product.soldUnits + product.availableUnits}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={product.soldUnits}>{product.soldUnits}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={product.availableUnits}>{product.availableUnits}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={product.supplierContact}>{product.supplierContact}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='flex items-center gap-2'>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEditClick(product);
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

export default Product;

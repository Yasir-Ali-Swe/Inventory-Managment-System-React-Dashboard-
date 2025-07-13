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

  // Filter products based on search term and selected category
  const filteredProducts = DummyProductData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEditClick = (product) => {
    console.log('Edit button clicked for product:', product);
    onEditProduct(product);
  };

  return (
    <div className='h-full w-full px-2'>
      <div className='ProductHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Manage All Products</h1>
      </div>
      <div className='my-4 mx-3'>
        <div className="filters border-textColor border-1 p-4 rounded-md flex items-center gap-5">
          <input 
            type="text" 
            placeholder='Search By Name' 
            className='w-[30%] py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className='w-[30%] py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor'
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
            className='bg-green py-2 px-8 text-lg text-textColor rounded-lg'
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="tableData my-4 mx-3 flex justify-center text-textColor">
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

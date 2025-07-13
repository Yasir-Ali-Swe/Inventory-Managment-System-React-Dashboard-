import React, { useState } from 'react'

const AddProduct = ({ onBackToProducts }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    purchasePrice: '',
    salesPrice: '',
    soldUnits: '',
    availableUnits: '',
    supplierContact: ''
  });

  const categories = [
    "Electronics",
    "Clothing", 
    "Furniture",
    "Books",
    "Sports",
    "Toys",
    "Health",
    "Beauty",
    "Home"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New product data:', formData);
    alert('Product added successfully!');
    onBackToProducts();
  };

  const handleCancel = () => {
    onBackToProducts();
  };

  return (
    <div className='h-full w-full px-2'>
      <div className='ProductHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Add New Product</h1>
      </div>
      
      <div className='my-4 mx-3'>
        <div className="add-form border-textColor border-1 p-6 rounded-md bg-secondary">
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Purchase Price ($) *
                </label>
                <input
                  type="number"
                  name="purchasePrice"
                  value={formData.purchasePrice}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  min="0"
                  step="0.01"
                  required
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Sales Price ($) *
                </label>
                <input
                  type="number"
                  name="salesPrice"
                  value={formData.salesPrice}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  min="0"
                  step="0.01"
                  required
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Units Sold
                </label>
                <input
                  type="number"
                  name="soldUnits"
                  value={formData.soldUnits}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  min="0"
                  placeholder="0"
                />
              </div>
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Available Units *
                </label>
                <input
                  type="number"
                  name="availableUnits"
                  value={formData.availableUnits}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  min="0"
                  required
                  placeholder="0"
                />
              </div>
              <div className='col-span-2'>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Supplier Contact *
                </label>
                <input
                  type="email"
                  name="supplierContact"
                  value={formData.supplierContact}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="supplier@example.com"
                />
              </div>
            </div>
            <div className='flex gap-4 pt-4'>
              <button
                type="submit"
                className='bg-green py-2 px-8 text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-all'
              >
                Add Product
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className='bg-red py-2 px-8 text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-all'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct; 
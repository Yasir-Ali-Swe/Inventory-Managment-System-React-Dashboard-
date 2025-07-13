import React, { useState } from 'react'

const AddProduct = ({ onBackToProducts }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    purchasePrice: '',
    salesPrice: '',
    availableUnits: '',
    supplierContact: ''
  });

  const categories = [
    'Electronics', 'Clothing', 'Furniture', 'Books', 'Sports',
    'Toys', 'Health', 'Beauty', 'Home'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBackToProducts();
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='AddProductHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>Add New Product</h1>
      </div>
      
      <div className='flex justify-center'>
        <div className='w-full max-w-2xl'>
          <div className='bg-secondary rounded-lg p-6 lg:p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-textColor text-sm mb-2'>Product Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="Enter product name"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Purchase Price *</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.purchasePrice}
                    onChange={(e) => handleInputChange('purchasePrice', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="0.00"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Sales Price *</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.salesPrice}
                    onChange={(e) => handleInputChange('salesPrice', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="0.00"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Available Units *</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.availableUnits}
                    onChange={(e) => handleInputChange('availableUnits', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="0"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Supplier Contact *</label>
                  <input
                    type="email"
                    value={formData.supplierContact}
                    onChange={(e) => handleInputChange('supplierContact', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="supplier@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className='flex justify-center gap-4 pt-6'>
                <button
                  type="button"
                  onClick={onBackToProducts}
                  className='bg-red px-6 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className='bg-green px-6 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct; 
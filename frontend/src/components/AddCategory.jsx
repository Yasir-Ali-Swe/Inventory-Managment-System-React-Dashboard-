import React, { useState } from 'react'

const AddCategory = ({ onBackToCategories }) => {
  const [formData, setFormData] = useState({
    name: '',
    products: '',
    supplier: '',
    sales: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New category data:', formData);
    alert('Category added successfully!');
    onBackToCategories();
  };

  const handleCancel = () => {
    onBackToCategories();
  };

  return (
    <div className='h-full w-full px-2'>
      <div className='CategoriesHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Add New Category</h1>
      </div>
      
      <div className='my-4 mx-3'>
        <div className="add-form border-textColor border-1 p-6 rounded-md bg-secondary">
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Category Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="Enter category name"
                />
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Number of Products *
                </label>
                <input
                  type="number"
                  name="products"
                  value={formData.products}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  min="0"
                  required
                  placeholder="0"
                />
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Supplier *
                </label>
                <input
                  type="text"
                  name="supplier"
                  value={formData.supplier}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="Enter supplier name"
                />
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Sales ($) *
                </label>
                <input
                  type="number"
                  name="sales"
                  value={formData.sales}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  min="0"
                  step="0.01"
                  required
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className='flex gap-4 pt-4'>
              <button
                type="submit"
                className='bg-green py-2 px-8 text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-all'
              >
                Add Category
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

export default AddCategory; 
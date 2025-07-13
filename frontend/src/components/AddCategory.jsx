import React, { useState } from 'react'

const AddCategory = ({ onBackToCategories }) => {
  const [formData, setFormData] = useState({
    name: '',
    supplier: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBackToCategories();
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='AddCategoryHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>Add New Category</h1>
      </div>
      
      <div className='flex justify-center'>
        <div className='w-full max-w-md'>
          <div className='bg-secondary rounded-lg p-6 lg:p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label className='block text-textColor text-sm mb-2'>Category Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                  placeholder="Enter category name"
                  required
                />
              </div>
              
              <div>
                <label className='block text-textColor text-sm mb-2'>Supplier *</label>
                <input
                  type="text"
                  value={formData.supplier}
                  onChange={(e) => handleInputChange('supplier', e.target.value)}
                  className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                  placeholder="Enter supplier name"
                  required
                />
              </div>
              
              <div className='flex justify-center gap-4 pt-6'>
                <button
                  type="button"
                  onClick={onBackToCategories}
                  className='bg-red px-6 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className='bg-green px-6 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory; 
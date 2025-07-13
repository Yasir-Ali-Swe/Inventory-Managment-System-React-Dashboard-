import React, { useState, useEffect } from 'react'

const EditProduct = ({ product, onBackToProducts }) => {
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

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        category: product.category || '',
        purchasePrice: product.purchasePrice || '',
        salesPrice: product.salesPrice || '',
        soldUnits: product.soldUnits || '',
        availableUnits: product.availableUnits || '',
        supplierContact: product.supplierContact || ''
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated product data:', formData);
    // Here you would typically make an API call to update the product
    alert('Product updated successfully!');
    onBackToProducts();
  };

  const handleCancel = () => {
    onBackToProducts();
  };

  if (!product) {
    return (
      <div className='h-full w-full px-2'>
        <div className='ProductHeader py-11 bg-secondary'>
          <h1 className='text-2xl text-textColor font-bold'>No Product Selected</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full w-full px-2'>
      <div className='ProductHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Edit Product</h1>
      </div>
      
      <div className='my-4 mx-3'>
        <div className="edit-form border-textColor border-1 p-6 rounded-md bg-secondary">
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-2 gap-6'>
              {/* Product Name */}
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary border-2 border-textColor bg-primary'
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary border-2 border-textColor bg-primary'
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Purchase Price */}
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Purchase Price ($)
                </label>
                <input
                  type="number"
                  name="purchasePrice"
                  value={formData.purchasePrice}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary border-2 border-textColor bg-primary'
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              {/* Sales Price */}
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Sales Price ($)
                </label>
                <input
                  type="number"
                  name="salesPrice"
                  value={formData.salesPrice}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary border-2 border-textColor bg-primary'
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              {/* Units Sold */}
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Units Sold
                </label>
                <input
                  type="number"
                  name="soldUnits"
                  value={formData.soldUnits}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary border-2 border-textColor bg-primary'
                  min="0"
                  required
                />
              </div>

              {/* Available Units */}
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Available Units
                </label>
                <input
                  type="number"
                  name="availableUnits"
                  value={formData.availableUnits}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary border-2 border-textColor bg-primary'
                  min="0"
                  required
                />
              </div>

              {/* Supplier Contact */}
              <div className='col-span-2'>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Supplier Contact
                </label>
                <input
                  type="email"
                  name="supplierContact"
                  value={formData.supplierContact}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary border-2 border-textColor bg-primary'
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 pt-4'>
              <button
                type="submit"
                className='bg-green py-2 px-8 text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-all'
              >
                Update Product
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

export default EditProduct;

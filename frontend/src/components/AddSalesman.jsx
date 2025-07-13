import React, { useState } from 'react'

const AddSalesman = ({ onBackToSalesmen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    sales: '',
    salary: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBackToSalesmen();
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='AddSalesmanHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>Add New Salesman</h1>
      </div>
      
      <div className='flex justify-center'>
        <div className='w-full max-w-2xl'>
          <div className='bg-secondary rounded-lg p-6 lg:p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-textColor text-sm mb-2'>Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="Enter salesman name"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="salesman@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Mobile *</label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="1234567890"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Sales *</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.sales}
                    onChange={(e) => handleInputChange('sales', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="0.00"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Salary *</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.salary}
                    onChange={(e) => handleInputChange('salary', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
              
              <div className='flex justify-center gap-4 pt-6'>
                <button
                  type="button"
                  onClick={onBackToSalesmen}
                  className='bg-red px-6 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className='bg-green px-6 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Add Salesman
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSalesman; 
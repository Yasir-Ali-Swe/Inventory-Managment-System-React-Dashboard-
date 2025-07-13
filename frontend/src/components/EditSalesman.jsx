import React, { useState, useEffect } from 'react'

const EditSalesman = ({ salesman, onBackToSalesmen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    sales: '',
    salary: ''
  });

  useEffect(() => {
    if (salesman) {
      setFormData({
        name: salesman.name || '',
        email: salesman.email || '',
        mobile: salesman.mobile || '',
        sales: salesman.sales || '',
        salary: salesman.salary || ''
      });
    }
  }, [salesman]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated salesman data:', formData);
    // Here you would typically make an API call to update the salesman
    alert('Salesman updated successfully!');
    onBackToSalesmen();
  };

  const handleCancel = () => {
    onBackToSalesmen();
  };

  if (!salesman) {
    return (
      <div className='h-full w-full px-2'>
        <div className='SalesmanHeader py-11 bg-secondary'>
          <h1 className='text-2xl text-textColor font-bold'>No Salesman Selected</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full w-full px-2'>
      <div className='SalesmanHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Edit Salesman</h1>
      </div>
      
      <div className='my-4 mx-3'>
        <div className="edit-form border-textColor border-1 p-6 rounded-md bg-secondary">
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="Enter salesman name"
                />
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="salesman@example.com"
                />
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Mobile *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="1234567890"
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

              <div>
                <label className='block text-textColor text-sm font-bold mb-2'>
                  Salary ($) *
                </label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
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
                Update Salesman
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

export default EditSalesman; 
import React, { useState, useEffect } from 'react'

const EditProfile = ({ profile, onBackToProfile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    role: '',
    department: ''
  });

  const roles = ['Admin', 'Manager', 'Employee', 'Salesman'];
  const departments = ['Management', 'Sales', 'IT', 'HR', 'Finance', 'Operations'];

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        email: profile.email || '',
        phone: profile.phone || '',
        address: profile.address || '',
        role: profile.role || '',
        department: profile.department || ''
      });
    }
  }, [profile]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBackToProfile();
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='EditProfileHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>Edit Profile</h1>
      </div>
      
      <div className='flex justify-center'>
        <div className='w-full max-w-2xl'>
          <div className='bg-secondary rounded-lg p-6 lg:p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-textColor text-sm mb-2'>Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="Enter full name"
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
                    placeholder="user@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    placeholder="+1 234 567 8900"
                    required
                  />
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Role *</label>
                  <select
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    required
                  >
                    <option value="">Select Role</option>
                    {roles.map((role, index) => (
                      <option key={index} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className='block text-textColor text-sm mb-2'>Department *</label>
                  <select
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className='block text-textColor text-sm mb-2'>Address *</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                  rows="3"
                  placeholder="Enter full address"
                  required
                />
              </div>
              
              <div className='flex justify-center gap-4 pt-6'>
                <button
                  type="button"
                  onClick={onBackToProfile}
                  className='bg-red px-6 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className='bg-green px-6 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile; 
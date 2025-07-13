import React, { useState, useEffect } from 'react'

const EditProfile = ({ profile, onBackToProfile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    role: '',
    department: '',
    avatar: ''
  });

  const departments = [
    "Management",
    "Sales",
    "Marketing", 
    "IT",
    "HR",
    "Finance",
    "Operations",
    "Customer Service"
  ];

  const roles = [
    "Admin",
    "Manager",
    "Supervisor",
    "Employee",
    "Intern"
  ];

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        email: profile.email || '',
        phone: profile.phone || '',
        address: profile.address || '',
        role: profile.role || '',
        department: profile.department || '',
        avatar: profile.avatar || ''
      });
    }
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated profile data:', formData);
    // Here you would typically make an API call to update the profile
    alert('Profile updated successfully!');
    onBackToProfile();
  };

  const handleCancel = () => {
    onBackToProfile();
  };

  if (!profile) {
    return (
      <div className='h-full w-full px-2'>
        <div className='ProfileHeader py-11 bg-secondary'>
          <h1 className='text-2xl text-textColor font-bold'>No Profile Data</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full w-full px-2'>
      <div className='ProfileHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Edit Profile</h1>
      </div>
      
      <div className='my-2 mx-3'>
        <div className="edit-form border-textColor border-1 p-4 rounded-md bg-secondary">
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Profile Picture Section */}
            <div className='flex justify-center mb-4'>
              <div className='relative'>
                <img 
                  src={formData.avatar || "https://via.placeholder.com/150"} 
                  alt="Profile" 
                  className='w-24 h-24 rounded-full border-4 border-tertiary'
                />
                <div className='absolute bottom-0 right-0 bg-green rounded-full p-1 cursor-pointer'>
                  <svg className="w-3 h-3 text-textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Personal Information */}
              <div className='space-y-3'>
                <h3 className='text-lg text-textColor font-bold mb-3'>Personal Information</h3>
                
                <div>
                  <label className='block text-textColor text-sm font-bold mb-1'>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className='block text-textColor text-sm font-bold mb-1'>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className='block text-textColor text-sm font-bold mb-1'>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className='block text-textColor text-sm font-bold mb-1'>
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="2"
                    className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                    required
                    placeholder="Enter your full address"
                  />
                </div>
              </div>

              {/* Work Information */}
              <div className='space-y-3'>
                <h3 className='text-lg text-textColor font-bold mb-3'>Work Information</h3>
                
                <div>
                  <label className='block text-textColor text-sm font-bold mb-1'>
                    Role *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                    required
                  >
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='block text-textColor text-sm font-bold mb-1'>
                    Department *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='block text-textColor text-sm font-bold mb-1'>
                    Profile Picture URL
                  </label>
                  <input
                    type="url"
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleInputChange}
                    className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>

                <div>
                  <label className='block text-textColor text-sm font-bold mb-1'>
                    Account Status
                  </label>
                  <div className='bg-green p-2 rounded-lg text-textColor font-bold text-sm'>
                    Active
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 pt-4 border-t border-textColor'>
              <button
                type="submit"
                className='bg-green py-2 px-8 text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-all'
              >
                Update Profile
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

export default EditProfile; 
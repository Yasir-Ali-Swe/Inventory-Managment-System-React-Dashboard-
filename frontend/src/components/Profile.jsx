import React from 'react'

const Profile = ({ onEditProfile }) => {
  // Mock user data - in a real app this would come from context or props
  const userProfile = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
    role: "Admin",
    department: "Management",
    joinDate: "2023-01-15",
    avatar: "https://via.placeholder.com/150"
  };

  const handleEditClick = () => {
    console.log('Edit Profile button clicked');
    onEditProfile(userProfile);
  };

  return (
    <div className='h-full w-full px-2'>
      <div className='ProfileHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Manage Your Profile</h1>
      </div>
      
      <div className='my-2 mx-3'>
        <div className="profile-container border-textColor border-1 p-4 rounded-md bg-secondary">
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl text-textColor font-bold'>Profile Information</h2>
            <button 
              onClick={handleEditClick}
              className='bg-green py-2 px-6 text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-all'
            >
              Edit Profile
            </button>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Profile Picture */}
            <div className='md:col-span-2 flex justify-center mb-4'>
              <div className='relative'>
                <img 
                  src={userProfile.avatar} 
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

            {/* Personal Information */}
            <div className='space-y-3'>
              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Full Name</label>
                <div className='bg-primary p-2 rounded-lg text-textColor text-sm'>
                  {userProfile.name}
                </div>
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Email Address</label>
                <div className='bg-primary p-2 rounded-lg text-textColor text-sm'>
                  {userProfile.email}
                </div>
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Phone Number</label>
                <div className='bg-primary p-2 rounded-lg text-textColor text-sm'>
                  {userProfile.phone}
                </div>
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Address</label>
                <div className='bg-primary p-2 rounded-lg text-textColor text-sm'>
                  {userProfile.address}
                </div>
              </div>
            </div>

            {/* Work Information */}
            <div className='space-y-3'>
              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Role</label>
                <div className='bg-primary p-2 rounded-lg text-textColor text-sm'>
                  {userProfile.role}
                </div>
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Department</label>
                <div className='bg-primary p-2 rounded-lg text-textColor text-sm'>
                  {userProfile.department}
                </div>
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Join Date</label>
                <div className='bg-primary p-2 rounded-lg text-textColor text-sm'>
                  {new Date(userProfile.joinDate).toLocaleDateString()}
                </div>
              </div>

              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Account Status</label>
                <div className='bg-green p-2 rounded-lg text-textColor font-bold text-sm'>
                  Active
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className='mt-4 pt-4 border-t border-textColor'>
            <h3 className='text-lg text-textColor font-bold mb-3'>Account Settings</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
              <button className='bg-blue p-2 rounded-lg text-textColor hover:bg-opacity-80 transition-all text-sm'>
                Change Password
              </button>
              <button className='bg-yellow p-2 rounded-lg text-textColor hover:bg-opacity-80 transition-all text-sm'>
                Notification Settings
              </button>
              <button className='bg-red p-2 rounded-lg text-textColor hover:bg-opacity-80 transition-all text-sm'>
                Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile; 
import React from 'react'

const Profile = ({ onEditProfile }) => {
  const profileData = {
    name: "Yasir Ali",
    email: "Yasir@example.com",
    role: "Admin",
    department: "Management",
    phone: "0330-1766870",
    address: "123 Main Street, City, State 12345",
    joinDate: "2023-01-15"
  };

  const handleEditClick = () => {
    onEditProfile(profileData);
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='ProfileHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>User Profile</h1>
      </div>
      
      <div className='flex justify-center'>
        <div className='w-full max-w-2xl'>
          <div className='bg-secondary rounded-lg p-6 lg:p-8'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-6'>
              <div className='w-32 h-32 bg-tertiary rounded-full flex items-center justify-center'>
                <span className='text-4xl text-textColor font-bold'>{profileData.name.charAt(0)}</span>
              </div>
              <div className='flex-1 text-center lg:text-left'>
                <h2 className='text-2xl lg:text-3xl text-textColor font-bold mb-2'>{profileData.name}</h2>
                <p className='text-textColor opacity-70 mb-1'>{profileData.role}</p>
                <p className='text-textColor opacity-70'>{profileData.department}</p>
              </div>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6'>
              <div className='space-y-3'>
                <div>
                  <label className='text-textColor opacity-70 text-sm'>Email</label>
                  <p className='text-textColor font-semibold'>{profileData.email}</p>
                </div>
                <div>
                  <label className='text-textColor opacity-70 text-sm'>Phone</label>
                  <p className='text-textColor font-semibold'>{profileData.phone}</p>
                </div>
                <div>
                  <label className='text-textColor opacity-70 text-sm'>Join Date</label>
                  <p className='text-textColor font-semibold'>{profileData.joinDate}</p>
                </div>
              </div>
              <div className='space-y-3'>
                <div>
                  <label className='text-textColor opacity-70 text-sm'>Address</label>
                  <p className='text-textColor font-semibold'>{profileData.address}</p>
                </div>
              </div>
            </div>
            
            <div className='mt-6 lg:mt-8 flex justify-center lg:justify-start'>
              <button 
                onClick={handleEditClick}
                className='bg-green py-2 px-6 lg:px-8 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile; 
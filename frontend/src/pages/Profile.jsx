import React, { useState } from 'react'
import { Profile as ProfileComponent, EditProfile } from '../components/index.jsx';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleEditProfile = (profile) => {
    setSelectedProfile(profile);
    setIsEditing(true);
  };

  const handleBackToProfile = () => {
    setIsEditing(false);
    setSelectedProfile(null);
  };

  return (
    <>
      {!isEditing ? (
        <ProfileComponent onEditProfile={handleEditProfile} />
      ) : (
        <EditProfile 
          profile={selectedProfile} 
          onBackToProfile={handleBackToProfile} 
        />
      )}
    </>
  )
}

export default Profile;
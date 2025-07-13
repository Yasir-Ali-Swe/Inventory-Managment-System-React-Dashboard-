import React, { useState } from 'react'
import { Profile as ProfileComponent, EditProfile } from '../components/index.jsx';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  console.log('ProfilePage component render - isEditing:', isEditing, 'selectedProfile:', selectedProfile);

  const handleEditProfile = (profile) => {
    console.log('handleEditProfile called with profile:', profile);
    setSelectedProfile(profile);
    setIsEditing(true);
    console.log('State updated - isEditing:', true, 'selectedProfile:', profile);
  };

  const handleBackToProfile = () => {
    setIsEditing(false);
    setSelectedProfile(null);
    console.log('State reset - back to profile view');
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

export default ProfilePage;
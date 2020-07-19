import React from 'react';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Profile = () => {
  const { user, loggedInOrNotGreeting } = useProfile();

  return (
    <>
    {loggedInOrNotGreeting()}
    
    </>
  )
}

export default Profile;
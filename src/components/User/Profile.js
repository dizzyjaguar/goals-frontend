import React from 'react';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Profile = () => {
  const { user, loggedInOrNotGreeting } = useProfile();

  return (
    <>
    {loggedInOrNotGreeting()}
    <h2>Created Goals</h2>

    <h2>Current Goals</h2>

    <h2>Completed Goals</h2>
    
    </>
  )
}

export default Profile;
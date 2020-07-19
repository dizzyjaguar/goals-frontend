import React from 'react';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Profile = () => {
  const { user } = useProfile();

  return (
    <>
    <h2>welcome {user.username}</h2>
    </>
  )
}

export default Profile;
import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Profile = () => {
  const { user, starredGoals, createdGoals, completedGoals, userProfileGreeting } = useProfile();
  console.log(createdGoals)
  console.log(starredGoals)

  return (
    <>
    Have dashboard keep main track of viewing the various goals the user is interacting with and the user profile for stats and interactions and then possibly buttons to view those goals or insights or interactions

    <br/>

    Use chart js to show how many goals started 'starred', goals completed, goals created, insights provided, etc, as many posative interactions basically
    Try to encourage productive behaviour based on what stats are shown
    {userProfileGreeting()}
    
    </>
  )
}

export default Profile;
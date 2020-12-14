import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Profile = () => {
  const { user, starredGoals, loggedInOrNotGreeting } = useProfile();

  return (
    <>
    {loggedInOrNotGreeting()}
    <h2>Created Goals</h2>
      
    <h2>Starred Goals</h2>
    <div>
      {starredGoals.map((goal) => <> <Link to={`/global/goal/${goal.goal._id}`}  >{goal.goal.title}</Link> <br/> </>)}
    </div>

    <h2>Completed Goals</h2>
    
    </>
  )
}

export default Profile;
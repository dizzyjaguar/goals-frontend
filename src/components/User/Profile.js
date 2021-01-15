import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Profile = () => {
  const { user, starredGoals, createdGoals, completedGoals, loggedInOrNotGreeting } = useProfile();
  console.log(createdGoals)
  console.log(starredGoals)

  return (
    <>
    {loggedInOrNotGreeting()}
    <h2>Created Goals</h2>
      {createdGoals.map((goal) => <> <Link to={`/global/goal/${goal._id}`}> {goal.title} </Link> <br/> </> )}
    <h2>Starred Goals</h2>
    <div>
      {starredGoals.map((goal) => <> <Link to={`/global/goal/${goal.goal._id}`}  >{goal.goal.title}</Link> <br/> </>)}
    </div>

    <h2>Completed Goals</h2>
      {completedGoals?.map((goal) => <> <Link to={`/global/goal/${goal._id}`}  >{goal.title}</Link> <br /> </>)}
    </>
  )
}

export default Profile;
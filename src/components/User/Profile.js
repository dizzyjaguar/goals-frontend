import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Profile = () => {
  const { user, starredGoals, createdGoals, completedGoals, loggedInOrNotGreeting } = useProfile();
  console.log(createdGoals)
  console.log(starredGoals)

  return (
    <>
    Have dashboard keep main track of viewing the various goals the user is interacting with and the user profile for stats and interactions and then possibly buttons to view those goals or insights or interactions

    <br/>

    Use chart js to show how many goals started 'starred', goals completed, goals created, insights provided, etc, as many posative interactions basically
    Try to encourage productive behaviour based on what stats are shown
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
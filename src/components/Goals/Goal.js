import React from 'react';

import { useGlobalGoals } from '../../hooks/goalhooks/globalGoalHook';
import { Link } from 'react-router-dom';

const Goal = ({ goal }) => {
  const { alreadyStarred, handleDelete } = useGlobalGoals();
  
  return (
    <div className='Goal'>
      {
          window.location.href.includes('goals') 
          ? <Link to={`goal/${goal._id}`}> <h3 > {goal.title} </h3> </Link> : <h3 > {goal.title} </h3>
        }
      {/* create this into a link to view the people who have starred the goal */}
      {/* <h3>Stars:{goal.totalStars}</h3> */}
      {alreadyStarred(goal)}
      <p>{goal.description}</p>
      <p>created by:{goal.createdBy?.username}</p>
      <button onClick={() => handleDelete(goal)}> Delete </button>
    </div>
  )
}

export default Goal;
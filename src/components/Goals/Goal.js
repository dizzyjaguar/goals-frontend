import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalGoals } from '../../hooks/goalhooks/globalGoalHook';

const Goal = ({ goal, handleDelete }) => {
  
  const { alreadyStarred } = useGlobalGoals();

  return (
    <div className='Goal'>
      <Link to={`/global/${goal._id}`}> 
      <h2>{goal.title}</h2> 
      </Link>
      {/* create this into a link to view the people who have starred the goal */}
      <h3>Stars:{goal.totalStars}</h3>
      { alreadyStarred(goal) }
      <p>{goal.description}</p>
      <p>created by:{goal.createdBy?.username}</p>
      <button onClick={() => handleDelete(goal)}> Delete </button>
    </div>
  )
}

export default Goal;
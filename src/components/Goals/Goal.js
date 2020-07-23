import React from 'react';
import { Link } from 'react-router-dom';

const Goal = ({ goal }) => {
  return (
    <div className='Goal'>
      <Link to={`/global/${goal._id}`}> 
      <h2>{goal.title}</h2> 
      </Link>
      <h3>{goal.stars}</h3>
      <p>{goal.description}</p>
      <p>{goal.createdBy}</p>
    </div>
  )
}

export default Goal;
import React from 'react';

const Goal = ({ goal }) => {
  return (
    <div className='Goal'>
      <h2>{goal.title}</h2>
      <h3>{goal.stars}</h3>
      <p>{goal.description}</p>
      <p>{goal.createdBy}</p>
    </div>
  )
}

export default Goal;
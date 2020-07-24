import React from 'react';
import { Link } from 'react-router-dom';

const Goal = ({ goal, handleDelete }) => {
  //fixed the problem with optional chaining
  console.log(goal.createdBy?.username)

  return (
    <div className='Goal'>
      <Link to={`/global/${goal._id}`}> 
      <h2>{goal.title}</h2> 
      </Link>
      <h3>Stars:{goal.stars}</h3>
      <p>{goal.description}</p>
      <p>created by:{goal.createdBy?.username}</p>
      <button onClick={() => handleDelete(goal)}> Delete </button>
    </div>
  )
}

export default Goal;
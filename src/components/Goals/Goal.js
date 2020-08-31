import React from 'react';

import { useGlobalGoals } from '../../hooks/goalhooks/globalGoalHook';
import { Link } from 'react-router-dom';
import { useInsightHooks } from '../../hooks/goalhooks/insightFormHooks';

const Goal = ({ goal, detailOrNot }) => {
  const { findStarredGoalsButton, handleDelete } = useGlobalGoals();
  const { handleChange, handleSubmit, insightValue } = useInsightHooks();
  
  return (
    <div className='Goal'>
        {
          window.location.href.includes('goals') 
          ? <Link to={`goal/${goal._id}`}> <h3 > {goal.title} </h3> </Link> : <h3 > {goal.title} </h3>
        }

      {/* create this into a link to view the people who have starred the goal */}
      {/* <h3>Stars:{goal.totalStars}</h3> */}

      {findStarredGoalsButton(goal)}

      <p>{goal.description}</p>
      <p>created by:{goal.createdBy?.username}</p>
      
        {
          detailOrNot ? 
          <>
          <form>
            <textarea placeholder='give insight' name={'insight'} value={insightValue} onChange={handleChange} />
            <input type='button' value='Comment' onClick={() => handleSubmit(goal)} />
          </form>
          
          <button onClick={() => console.log('this would reveal ')}>Insights</button>
          </>
          
          
          : <> </>
        }
      
      {/* this needs to only be available to the creator of the goal */}
      <button onClick={() => handleDelete(goal)}> Delete </button>
    </div>
  )
}

export default Goal;
import React from 'react';
import Goal from './Goal';
import { useGlobalGoalDetail } from '../../hooks/goalhooks/globalGoalHook';

const GoalDetail = () => {
  const { goal, insightNodes, handleShowMoreInsights } = useGlobalGoalDetail()

  return (
    <>
      <Goal 
        goal={goal}
        detailOrNot={true}
      />
      {
        goal?.insights?.length > 0 ? <button onClick={() => handleShowMoreInsights()}> Comments </button> 
        : <> </>
      }
    {/* <button onClick={() => handleShowMoreInsights()}> Comments </button> */}
    {insightNodes}
    </>
  )
}

export default GoalDetail;
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
    <button onClick={() => handleShowMoreInsights()}> Comments </button>
    {insightNodes}
    </>
  )
}

export default GoalDetail;
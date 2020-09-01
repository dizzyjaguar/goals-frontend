import React from 'react';
import Goal from './Goal';
import { useGlobalGoalDetail } from '../../hooks/goalhooks/globalGoalHook';

const GoalDetail = () => {
  const { goal, insightNodes, handleIncrease } = useGlobalGoalDetail()

  return (
    <>
      <Goal 
        goal={goal}
        detailOrNot={true}
      />
    <button onClick={() => handleIncrease()}> Comments </button>
    {insightNodes}
    </>
  )
}

export default GoalDetail;
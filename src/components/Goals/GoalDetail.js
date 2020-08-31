import React from 'react';
import Goal from './Goal';
import { useGlobalGoalDetail } from '../../hooks/goalhooks/globalGoalHook';

const GoalDetail = () => {
  const { goal, insightNodes } = useGlobalGoalDetail()

  return (
    <>
      <Goal 
        goal={goal}
        detailOrNot={true}
      />
    {insightNodes}
    </>
  )
}

export default GoalDetail;
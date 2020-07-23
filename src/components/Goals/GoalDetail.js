import React from 'react';
import Goal from './Goal';
import { useGlobalGoalDetail } from '../../hooks/goalhooks/globalGoalHook';

const GoalDetail = () => {
  const { goal } = useGlobalGoalDetail()

  return (
    <>
      <Goal 
        goal={goal}
      />
    </>
  )
}

export default GoalDetail;
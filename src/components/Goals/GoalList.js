import React from 'react';
import { useGlobalGoals } from '../../hooks/goalhooks/globalGoalHook';

const GoalList = () => {
  const { goalNodes } = useGlobalGoals();
  return (
    <>
      {goalNodes}
    </>
  )
}

export default GoalList;
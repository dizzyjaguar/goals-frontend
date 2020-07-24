import React from 'react';
import { useGlobalGoals } from '../../hooks/goalhooks/globalGoalHook';
import CreateGoal from '../Forms/CreateGoal';

const GoalList = () => {
  const { goalNodes } = useGlobalGoals();
  return (
    <>
      <CreateGoal />
      {goalNodes}
    </>
  )
}

export default GoalList;
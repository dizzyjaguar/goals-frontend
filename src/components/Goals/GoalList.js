import React from 'react';
import { useGlobalGoals } from '../../hooks/goalhooks/globalGoalHook';
import CreateGoal from '../Forms/CreateGoal';

const GoalList = () => {
  const { goalNodes } = useGlobalGoals();
  return (
    <>
    {/* Implement infinite scrolling and a search bar to search for key words */}
      <CreateGoal />
      {goalNodes}
    </>
  )
}

export default GoalList;
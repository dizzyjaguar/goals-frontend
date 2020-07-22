import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalGoals } from '../../selectors/goalSelector';
import { setGlobalGoalsRedux } from '../../actions/goalActions';
import Goal from '../../components/Goals/Goal';

export const useGlobalGoals = () => {
  const dispatch = useDispatch();
  const globalGoals = useSelector(getGlobalGoals);

  useEffect(() => {
    dispatch(setGlobalGoalsRedux())
  }, []);

  const goalNodes = globalGoals.map(goal => {
    return <Goal
      goal={ goal }
      key= { goal._id }
    />
  })

  return {
    globalGoals,
    goalNodes
  }
}
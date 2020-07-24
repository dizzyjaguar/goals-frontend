import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalGoals, getGlobalGoal } from '../../selectors/goalSelector';
import { setGlobalGoalsRedux, setGlobalGoalRedux, deleteGoalRedux } from '../../actions/goalActions';
import Goal from '../../components/Goals/Goal';
import { useParams } from 'react-router-dom';

export const useGlobalGoals = () => {
  const dispatch = useDispatch();
  const globalGoals = useSelector(getGlobalGoals);

  useEffect(() => {
    dispatch(setGlobalGoalsRedux())
  }, []);

  const handleDelete = async (goal) => {
    dispatch(deleteGoalRedux(goal))
  };

  const goalNodes = globalGoals.map(goal => {
    return <Goal
      goal={ goal }
      key= { goal._id }
      handleDelete= {handleDelete}
    />
  });


  return {
    globalGoals,
    goalNodes,
    handleDelete
  }
};

//----------------------------------------

export const useGlobalGoalDetail = () => {
  const dispatch = useDispatch();
  const goal = useSelector(getGlobalGoal)
  let { _id } = useParams();
  


  useEffect(() => {
    dispatch(setGlobalGoalRedux(_id))
      .then()
  }, [])

  

  return {
    goal
  }
  
}
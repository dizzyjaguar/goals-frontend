import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalGoals, getGlobalGoal } from '../../selectors/goalSelector';
import { setGlobalGoalsRedux, setGlobalGoalRedux, deleteGoalRedux } from '../../actions/goalActions';
import Goal from '../../components/Goals/Goal';
import { useParams } from 'react-router-dom';
import { useVerifyUser } from '../authHooks/currentHooks';
import { createStarRedux } from '../../actions/starActions';

export const useGlobalGoals = () => {
  const dispatch = useDispatch();
  const user = useVerifyUser();
  const globalGoals = useSelector(getGlobalGoals);
  

  useEffect(() => {
    dispatch(setGlobalGoalsRedux())
  }, []);

  const handleDelete = async (goal) => {
    dispatch(deleteGoalRedux(goal))
  };

  const handleStar = async (goal) => {
    let star = {
      user: user,
      goal: goal
    };

    dispatch(createStarRedux(star))
  }

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
    handleDelete,
    handleStar
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
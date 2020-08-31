import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalGoals, getGlobalGoal, getInsights } from '../../selectors/goalSelector';
import { setGlobalGoalsRedux, setGlobalGoalRedux, deleteGoalRedux } from '../../actions/goalActions';
import Goal from '../../components/Goals/Goal';
import { useParams, Link } from 'react-router-dom';
import { useVerifyUser } from '../authHooks/currentHooks';
import { createStarRedux, setUserStars, deleteStarRedux } from '../../actions/starActions';
import { getUserStars } from '../../selectors/userSelector';
import { getUser } from '../../selectors/authSelector';
import { setInsightsRedux } from '../../actions/insightActions';

export const useGlobalGoals = () => {
  const dispatch = useDispatch();
  // this is making an error when not signed in
  const user = useVerifyUser();
  // const user = useSelector(getUser)
  const globalGoals = useSelector(getGlobalGoals);
  const starredGoals = useSelector(getUserStars);
  

  useEffect(() => {
    dispatch(setGlobalGoalsRedux())
  }, []);
  
  useEffect(() => {
    if(user) {
      dispatch(setUserStars())
    }
  }, []);

  const handleDelete = (goal) => {
    dispatch(deleteGoalRedux(goal))
  };

  const handleCreateStar = (goal) => {
    let star = {
      user: user,
      goal: goal
    };
    dispatch(createStarRedux(star))
  };

  const handleDeleteStar = (goal) => {
    dispatch(deleteStarRedux(goal))
  };

  
  const findStarredGoalsButton = (goal) => {
    const isStar = starredGoals.find(star => star.goal === goal._id || star.goal.id === goal._id);
  
    if(!user) {
      return null
    } else if(!isStar) {
      return <button onClick={() => handleCreateStar(goal._id)}> AddStar </button>
    } else if(isStar) {
      return <button onClick={() => handleDeleteStar(isStar)}> UnStar </button>
    };
  };

  


  
  
  const goalNodes = globalGoals.map(goal => {
    return <Goal
      goal={ goal }
      key={ goal._id }
      detailOrNot={false}
    />
  });


  return {
    globalGoals,
    goalNodes,
    handleDelete,
    findStarredGoalsButton,
  }
};

//----------------------------------------

export const useGlobalGoalDetail = () => {
  const dispatch = useDispatch();
  const goal = useSelector(getGlobalGoal)
  const insights = useSelector(getInsights)
  let { _id } = useParams();
  

  useEffect(() => {
    dispatch(setGlobalGoalRedux(_id))
  }, [])

  useEffect(() => {
    dispatch(setInsightsRedux(_id))
  }, [goal])

  console.log(insights)

  

  return {
    goal
  }
  
};
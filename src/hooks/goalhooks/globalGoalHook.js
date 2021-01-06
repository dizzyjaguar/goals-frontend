import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalGoals, getGlobalGoal, getInsights } from '../../selectors/goalSelector';
import { setGlobalGoalsRedux, setGlobalGoalRedux, deleteGoalRedux, completeGoalRedux } from '../../actions/goalActions';
import Goal from '../../components/Goals/Goal';
import { useParams, Link } from 'react-router-dom';
// import { useVerifyUser } from '../authHooks/currentHooks';
import { createStarRedux, setUserStars, deleteStarRedux } from '../../actions/starActions';
import { getUserCompleted, getUserStars } from '../../selectors/userSelector';
import { getUser } from '../../selectors/authSelector';
import { setInsightsRedux } from '../../actions/insightActions';
import Insight from '../../components/Insights/Insight';

export const useGlobalGoals = () => {
  const dispatch = useDispatch();
  // this is making an error when not signed in
  // const user = useVerifyUser();
  const user = useSelector(getUser)
  const globalGoals = useSelector(getGlobalGoals);
  const starredGoals = useSelector(getUserStars);
  const completedGoals = useSelector(getUserCompleted);
  

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
    let isStar;
    if(user) {
      isStar = starredGoals.find(star => star.goal === goal._id || star.goal.id === goal._id);
    } else {
      return
    }
  
    if(!user) {
      return null
    } else if(!isStar) {
      return <button onClick={() => handleCreateStar(goal._id)}> AddStar </button>
    } else if(isStar) {
      return <button onClick={() => handleDeleteStar(isStar)}> UnStar </button>
    };
  };

  const handleCompleteGoal = (goal) => {
    dispatch(completeGoalRedux(user.id, goal._id))
  };
  

  const completedButton = goal => {
    const isComplete = completedGoals.find(completedGoal => completedGoal === goal._id)
  }


  
  
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
    handleCompleteGoal,
    findStarredGoalsButton,
  }
};

//----------------------------------------

export const useGlobalGoalDetail = () => {
  const dispatch = useDispatch();
  const goal = useSelector(getGlobalGoal)
  const insights = useSelector(getInsights)
  const [amountToShow, setAmountToShow] = useState(0)
  let { _id } = useParams();
  
  

  useEffect(() => {
    dispatch(setGlobalGoalRedux(_id))
  }, [])

  useEffect(() => {
    dispatch(setInsightsRedux(_id))
  }, [goal])

  
  
  const slicedInisghts = (amount, insightsArr) => {
    return insightsArr.slice(0, amount);
  };

  const handleShowMoreInsights = () => {
    setAmountToShow(amountToShow + 3)
  };

  //this variable below is causing an infinite loop
  const amountOfInsights = slicedInisghts(amountToShow, insights)
  console.log(amountOfInsights)
  const insightNodes = amountOfInsights.map(insight => {
    return <Insight insight={ insight } key={ insight._id } />
  });

  

  return {
    goal,
    insightNodes,
    handleShowMoreInsights
    
  }
  
};
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../selectors/authSelector';
import { setUserStars } from '../../actions/starActions';
import { useVerifyUser } from './currentHooks';
import { getUserItems } from '../../selectors/userSelector';
import { setCurrentGoals, setUserGoalsRedux } from '../../actions/goalActions';
import { Link } from 'react-router-dom';


export const useProfile = () => {
  const dispatch = useDispatch();
  const user = useVerifyUser();
  const userItems = useSelector(getUserItems)
  const starredGoals = userItems.starredGoals
  const createdGoals = userItems.createdGoals
  const completedGoals = userItems.completedGoals
  const currentGoals = userItems.currentGoals
  
  
  useEffect(() => {
    if (user !== null) {
      dispatch(setUserStars())
      dispatch(setUserGoalsRedux(user._id))
      dispatch(setCurrentGoals(starredGoals))
    } else {
      return;
    }
  }, [user]);

  const userProfileGreeting = () => {
    if(user !== null) {
      return <h1> {user.username}'s GOALS and STATS</h1>
    } else {
      return <h2> You need an account to view this </h2>
    }
  };

  const starredGoalNodes = starredGoals.map((goal) => <> <Link to={`/global/goal/${goal.goal._id}`}  >{goal.goal.title}</Link> <br/> </>);

  const completedGoalNodes = completedGoals?.map((goal) => <> <Link to={`/global/goal/${goal._id}`}  >{goal.title}</Link> <br /> </>);

  const createdGoalNodes = createdGoals.map((goal) => <> <Link to={`/global/goal/${goal._id}`}> {goal.title} </Link> <br/> </> );

  const currentGoalNodes = currentGoals?.map((goal) => <> <Link to={`/global/goal/${goal.goal._id}`}> {goal.goal.title} </Link> <br/> </> );





  return {
    user,
    starredGoals,
    createdGoals,
    completedGoals,
    currentGoals,
    starredGoalNodes,
    completedGoalNodes,
    createdGoalNodes,
    currentGoalNodes,
    userProfileGreeting,
  }
}
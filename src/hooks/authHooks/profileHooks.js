import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../selectors/authSelector';
import { setUserStars } from '../../actions/starActions';
import { useVerifyUser } from './currentHooks';
import { getUserItems } from '../../selectors/userSelector';
import { setUserGoalsRedux } from '../../actions/goalActions';


export const useProfile = () => {
  const dispatch = useDispatch();
  const user = useVerifyUser();
  const userItems = useSelector(getUserItems)
  const starredGoals = userItems.starredGoals
  
  useEffect(() => {
    if (user !== null) {
      dispatch(setUserStars())
      dispatch(setUserGoalsRedux(user._id))
    } else {
      return;
    }
  }, [user]);

  const loggedInOrNotGreeting = () => {
    if(user !== null) {
      return <h1>hello {user.username}</h1>
    } else {
      return <h2> You need an account for anything cool </h2>
    }
  };


  return {
    user,
    starredGoals,
    loggedInOrNotGreeting
  }
}
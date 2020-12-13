import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../selectors/authSelector';
import { setUserStars } from '../../actions/starActions';
import { useVerifyUser } from './currentHooks';
import { getUserItems } from '../../selectors/userSelector';


export const useProfile = () => {
  const dispatch = useDispatch();
  const user = useVerifyUser();
  const userItems = useSelector(getUserItems)
  const starredGoals = userItems.starredGoals
  console.log(starredGoals)
  
  useEffect(() => {
    if (user !== null) {
      dispatch(setUserStars())
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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../selectors/authSelector';
import { setUserStars } from '../../actions/starActions';
import { useVerifyUser } from './currentHooks';


export const useProfile = () => {
  const dispatch = useDispatch();
  const user = useVerifyUser()

  useEffect(() => {
    console.log(user)
  }, [user])

  
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
    loggedInOrNotGreeting
  }
}
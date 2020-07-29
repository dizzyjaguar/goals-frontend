import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../selectors/authSelector';

export const useProfile = () => {
  // const dispatch = useDispatch();
  const user = useSelector(getUser)

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
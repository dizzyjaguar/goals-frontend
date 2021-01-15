import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserByIdRedux } from '../../actions/authActions';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Dashboard = () => {
  const { user } = useProfile();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserByIdRedux(user))
  }, [])
  return (
      <>
        This is the user Dashboard
      </>
  )
}

export default Dashboard;
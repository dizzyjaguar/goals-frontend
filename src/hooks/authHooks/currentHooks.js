import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../selectors/authSelector';
import { verifyRedux } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import { useLogout } from './signupHooks';

export const useCurrent = () => {
  const user = useSelector(getUser);
  const { handleLogout } = useLogout();

  const header = () => {
    if (user) {
      return (
        <div className='Header'>
      <Link to='/'>Home</Link>
      <Link to='/todos'>Todos</Link>
      <Link to='/global/goals'>Global</Link>
      {/* make username at the end of profile link, might need to be done in Route on App */}
      <Link to='/profile'>Profile</Link>
      <Link to='/about'>About</Link>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
      )
    } else if (!user) {
      return (
        <div className='Header'>
      <Link to='/'>Home</Link>
      <Link to='/todos'>Todos</Link>
      <Link to='/global/goals'>Global</Link>
      <Link to='/about'>About</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
      )
    }
  }

  return {
    header
  }
}; 

//this currently is not being used anywhere yet, but will be when more important stuff is able to be done by a logged in user, such as creating a Goal or editing something thats personal to a user
export const useVerifyUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    if(!user) {
      dispatch(verifyRedux());
    }
  }, [user]);



  return user;
};
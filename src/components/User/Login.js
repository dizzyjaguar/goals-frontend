import React from 'react'
import { useLogin } from '../../hooks/authHooks/loginHooks';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useBootstrap } from '../../hooks/bootstrapHooks';


const Login = () => {
  const { values, handleChange, handleLogin, user, loading } = useLogin();
  const { spinner } = useBootstrap();
  // console.log(loading)
  return (
    <>
      {
        loading ? {spinner} :
        user ? <Link to='/global/goals'>View Goals</Link> :
      <form className='Login-form'>
        <label>
          Username:
          <input name='username' type='text' value={values.username} onChange={handleChange} placeholder='username' />
        </label>
        <label>
          Password
          <input name='password' type='password' value={values.password} onChange={handleChange} placeholder='password' />
        </label>
        <button type='submit' onClick={handleLogin}>Login</button>
      </form>
      }
    </>
  )
}

export default Login;
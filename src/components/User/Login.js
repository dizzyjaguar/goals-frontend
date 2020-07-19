import React from 'react'
import { useLogin } from '../../hooks/authHooks/loginHooks';

const Login = () => {
  const { values, handleChange, handleLogin } = useLogin();

  return (
    <>
      <form className='Login-form'>
        <label>
          Username:
          <input name='username' type='text' value={values.username} onChange={handleChange} placeholder='username' />
        </label>
        <label>
          Password
          <input name='password' type='text' value={values.password} onChange={handleChange} placeholder='password' />
        </label>
        <button type='submit' onClick={handleLogin}>Login</button>
      </form>
    </>
  )
}

export default Login;
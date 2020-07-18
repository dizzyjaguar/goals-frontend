import React from 'react';
import { useSignup } from '../../hooks/authHooks/signupHooks';

const Signup = () => {
  const { values, handleChange, handleSignup } = useSignup();

  return (
    <>
      <form className='Signup-form'>
        <label>
          Username:
          <input name='username' type='text' value={values.username} onChange={handleChange} placeholder='username' />
        </label>
        <label>
          Password
          <input name='password' type='text' value={values.password} onChange={handleChange} placeholder='password' />
        </label>
        <label>
          Photo
          <input name='photo' type='file' />
        </label>
        <button type='submit' onClick={handleSignup}>Signup</button>
      </form>
    </>
  )
}

export default Signup;
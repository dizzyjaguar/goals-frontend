import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/authHooks/signupHooks';

const Header = () => {
  const { handleLogout } = useLogout();
  
  return (
    <div className='Header'>
      <Link to='/'>Home</Link>
      <Link to='/todos'>Todos</Link>
      <Link to='/about'>About</Link>
      <Link to='/signup'>Signup</Link>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
    )
  }

export default Header;


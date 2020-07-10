import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <Link to='/'>Home</Link>
        <Link to='/todos'>Todos</Link>
        <Link to='/about'>About</Link>
      </div>
    )
  }
}

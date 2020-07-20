import React from 'react'
import { useCurrent } from '../../hooks/authHooks/currentHooks';

const Header = () => {
  const { header } = useCurrent();
   
  return (
    <>
    {header()}
    </>
    )
  }

export default Header;


import { useState } from 'react'

export const useSignup = () => {
  // add email field on the backend User model at somepoint
  const [values, setValues] = useState({
    username: '',
    password: '',
    photoUrl: ''
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange
  }
}
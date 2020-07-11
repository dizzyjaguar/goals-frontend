import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupRedux } from '../../actions/authActions';

export const useSignup = () => {
  const dispatch = useDispatch();
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

  const handleSignup = async(event) => {
    event.preventDefault()

    dispatch(signupRedux(values))
  };

  return {
    values,
    handleChange,
    handleSignup
  }
}
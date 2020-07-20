import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { loginRedux, verifyRedux } from '../../actions/authActions';
import { getUser } from '../../selectors/authSelector';
import { useEffect } from 'react';

export const useLogin = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();

    setValues({ ...values, [name]: value });
  };

  const handleLogin = async(event) => {
    event.preventDefault()

    dispatch(loginRedux(values))
  };

  return {
    values,
    handleChange,
    handleLogin
  }
};


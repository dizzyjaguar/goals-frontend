import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { loginRedux } from '../../actions/authActions';
import { getUser, getAuthLoading } from '../../selectors/authSelector';


export const useLogin = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getAuthLoading)
  const user = useSelector(getUser)
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
    handleLogin,
    user,
    loading
  }
};


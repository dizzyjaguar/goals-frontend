import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getUserByIdRedux, loginRedux } from '../../actions/authActions';
import { getUser, getAuthLoading } from '../../selectors/authSelector';


export const useLogin = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getAuthLoading)
  const user = useSelector(getUser)
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [loggedIn, setLoggedIn] = useState(false)

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();

    setValues({ ...values, [name]: value });
  };

  const handleLogin = async(event) => {
    event.preventDefault()

    dispatch(loginRedux(values))
    setLoggedIn(true)

  };
  
  // this is close to working but causes infinite loop for some reason
  // if (loggedIn === true  && loading === false) {
  //   dispatch(getUserByIdRedux(user))
  //   setLoggedIn(false)
  // }

  
  

  return {
    values,
    handleChange,
    handleLogin,
    user,
    loading
  }
};


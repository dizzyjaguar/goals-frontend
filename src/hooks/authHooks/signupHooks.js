import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupRedux, logoutRedux } from '../../actions/authActions';

//------ NEXT THING TO DO IS THE LOGIN ------
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
};
// LOGOUT HOOK this will need more work, like re routing after loggin out, and if statement so that this isnt an option if a user is actually logged in, something like if (user !== null) {then make this button option available}
export const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async(event) => {
    event.preventDefault()

    dispatch(logoutRedux())
  };

  return {
    handleLogout
  }
}

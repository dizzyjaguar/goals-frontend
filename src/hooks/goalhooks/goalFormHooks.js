import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getUser } from '../../selectors/authSelector'
import { createGlobalGoalRedux } from '../../actions/goalActions'

export const useGoalForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const [values, setValues] = useState({
    createdBy: user._id,
    title: '',
    description: ''
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault()

    dispatch(createGlobalGoalRedux(values))
  };

  
    // user ? <button type='submit' onClick={handleSubmit}>Create</button> : <p>Please Login First</p>
  

  return {
    values,
    handleChange,
    handleSubmit,
    user
  }

}
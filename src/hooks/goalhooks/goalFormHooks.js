import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getUser } from '../../selectors/authSelector'
import { createGlobalGoalRedux } from '../../actions/goalActions'

export const useGoalForm = () => {
  const dispatch = useDispatch()
  //possibly change to verify user hook instead of just the selector
  const user = useSelector(getUser)
  const [values, setValues] = useState({
    createdBy: user?._id,
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


  return {
    values,
    handleChange,
    handleSubmit,
    user
  }

}
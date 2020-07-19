import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createTodo } from '../../actions/todosActions';

export const useTodoForm = () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    title: '',
    description: '',
    complete: false
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault()

    dispatch(createTodo(values))
  };

  return {
    values,
    handleChange,
    handleSubmit
  }

}
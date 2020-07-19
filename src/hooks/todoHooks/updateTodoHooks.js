import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateTodo, setTodoRedux } from '../../actions/todosActions';
import { getSingleTodo } from '../../selectors/todoSelector';

export const useUpdateTodo = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    title: '',
    description: '',
    complete: false
  });
  const todo = useSelector(getSingleTodo) 
  let { _id } = useParams();

  useEffect(() => {
    dispatch(setTodoRedux(_id))
  }, [])

  useEffect(() => {
    setValues(todo)
  }, [todo])

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault()
  
    dispatch(updateTodo(todo, values))
    };

  return {
    values,
    todo,
    handleChange,
    handleSubmit
  }

}
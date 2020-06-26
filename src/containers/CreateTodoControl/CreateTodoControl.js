import React, { useState } from 'react';
import CreateTodoForm from '../../components/CreateTodoForm/CreateTodoForm';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../actions/todosActions';

const CreateTodoControl = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [complete, setComplete] = useState(false);
  

  const handleChange = ({ target }) => {
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'description') setDescription(target.value);
    if(target.name === 'complete') setComplete(target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault()

    const newTodo = {
      title: title,
      description: description,
      complete: complete
    };

    dispatch(createTodo(newTodo))
  };


  return (
    <>
      <CreateTodoForm title={title} description={description} complete={complete} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default CreateTodoControl;
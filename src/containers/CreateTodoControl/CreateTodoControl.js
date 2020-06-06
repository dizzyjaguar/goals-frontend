import React, { useState } from 'react';
import request from 'superagent';
import CreateTodoForm from '../../components/CreateTodoForm/CreateTodoForm';

const CreateTodoControl = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [complete, setComplete] = useState(false);
  

  const handleChange = ({ target }) => {
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'description') setDescription(target.value);
    if(target.name === 'complete') setComplete(target.value);
  }

  const handleSubmit = async() => {

    const newTodo = {
      title: title,
      description: description,
      complete: complete
    };

    await request.post('http://localhost:7890/api/v1/todos', newTodo)
  };


  return (
    <>
      <CreateTodoForm title={title} description={description} complete={complete} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default CreateTodoControl;
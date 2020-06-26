import React, { useState, useEffect } from 'react';
import UpdateTodoForm from '../../components/UpdateTodoForm/UpdateTodoForm';
import request from 'superagent';
import { useParams } from 'react-router-dom';
import { getTodoById } from '../../services/Todos/todoServices';

///THIS CONTROLLER IS NOT WORKING 
const UpdateTodoControl = () => {
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  let { _id } = useParams();
  
  //this isnt working!
  useEffect(() => {
    getTodoById(_id)
      .then(todo => setTodo(todo.body))
  }, [])

  const handleChange = ({ target }) => {
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'description') setDescription(target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    
    console.log('Update Todo sent');  
    const updatedTodo = {
      title: todo.title,
      description: todo.description,
      complete: false,
    }
    
    request.patch(`http://localhost:789api/v1/todos/${todo._id}`, updatedTodo)
    }

  
  
  return(
    <>
      <UpdateTodoForm todo={todo} title={title} description={description} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
};

export default UpdateTodoControl;
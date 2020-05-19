import React, { useState, useEffect } from 'react';
import UpdateTodoForm from '../../components/UpdateTodoForm/UpdateTodoForm';
import request from 'superagent';
import { useParams } from 'react-router-dom';


const UpdateTodoControl = () => {
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  let { _id } = useParams();

  const handleChange = ({ target }) => {
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'description') setDescription(target.value);
  }

  const setTodoToUpdate = (_id) => {
    return request.get(`http://localhost:7890/api/v1/todos/${_id}`)
    .then(setTitle(todo.title), setDescription(todo.description))  
  }

  useEffect(() => {
    setTodoToUpdate(_id)
    .then(todo => setTodo(todo.body))
    .then(() => setTitle(todo.title))
  }, [])
  
  console.log(title)
  
  
  return(
    <>
      <UpdateTodoForm todo={todo} title={title} description={description} handleChange={handleChange} />
    </>
  );
};

export default UpdateTodoControl;
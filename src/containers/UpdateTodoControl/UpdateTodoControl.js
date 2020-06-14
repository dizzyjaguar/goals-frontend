import React, { useState, useEffect } from 'react';
import UpdateTodoForm from '../../components/UpdateTodoForm/UpdateTodoForm';
import request from 'superagent';
import { useParams } from 'react-router-dom';

///THIS CONTROLLER IS NOT WORKING 
const UpdateTodoControl = () => {
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  let { _id } = useParams();

  const handleChange = ({ target }) => {
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'description') setDescription(target.value);
  }

  //this also might need to change
  const setTodoToUpdate = async() => {
    const res = await request.get(`http://localhost:7890/api/v1/todos/${_id}`)
    await setTodo(res.body)
  };

  //this isnt working!
  useEffect(() => {
    setTodoToUpdate()
  }, [])
  
  
  return(
    <>
      <UpdateTodoForm todo={todo} title={todo} description={todo} handleChange={handleChange} />
    </>
  );
};

export default UpdateTodoControl;
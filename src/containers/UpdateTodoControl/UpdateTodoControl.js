import React, { useState, useEffect } from 'react';
import UpdateTodoForm from '../../components/UpdateTodoForm/UpdateTodoForm';
import { useParams } from 'react-router-dom';
import { getTodoById, patchTodo } from '../../services/Todos/todoServices';


const UpdateTodoControl = () => {
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  let { _id } = useParams();
  
  
  useEffect(() => {
    getTodoById(_id)
      .then(todo => setTodo(todo.body));
  }, [])


  //this isnt working cant set the title or description state for some reason
  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
  }, [todo])

  console.log(todo.title)

  const handleChange = ({ target }) => {
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'description') setDescription(target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    
    const updatedTodo = {
      title: title,
      description: description,
      complete: false,
    };
    
    patchTodo(todo, updatedTodo)
    };

  
  return(
    <>
      <UpdateTodoForm todo={todo} title={title} description={description} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
};

export default UpdateTodoControl;
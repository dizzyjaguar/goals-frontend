import React, { useState, useEffect } from 'react';
import UpdateTodoForm from '../../components/UpdateTodoForm/UpdateTodoForm';
import { useParams } from 'react-router-dom';
import { getTodoById, patchTodo } from '../../services/Todos/todoServices';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../actions/todosActions';


const UpdateTodoControl = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  let { _id } = useParams();
  
  useEffect(() => {
    getTodoById(_id)
      .then(todo => setTodo(todo.body));
  }, [])

  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
  }, [todo])

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
    
    dispatch(updateTodo(todo, updatedTodo))
    // patchTodo(todo, updatedTodo)
    };

  return(
    <>
      <UpdateTodoForm todo={todo} title={title} description={description} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
};

export default UpdateTodoControl;
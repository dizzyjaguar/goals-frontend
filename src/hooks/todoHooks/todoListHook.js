import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../selectors/todoSelector';
import { setTodosRedux, deleteTodo } from '../../actions/todosActions';
import TodoItem from '../../components/TodoItem/TodoItem';
import CreateTodoForm from '../../components/CreateTodoForm/CreateTodoForm';


export const useTodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const [createTodoForm, setCreateTodoForm] = useState(false);

  useEffect(() => {
    dispatch(setTodosRedux())  
  }, []);

  const handleDelete = async (todo) => {
    dispatch(deleteTodo(todo))
  }

  const handleTodoFormOrNot = () => {
    if (createTodoForm === true) {
      setCreateTodoForm(false)
    } else setCreateTodoForm(true)
  };

  const todoFormOrNot = () => {
    if (createTodoForm === true) {
      return <CreateTodoForm />
    } else {
      return <button onClick={handleTodoFormOrNot}>Create Todo</button> 
    }
  };

  const todoNodes = todos.map(todo => {
    return <TodoItem 
      todo={ todo }
      handleDelete={handleDelete}
      key={ todo._id }
    />
  })

  return {
    todos,
    todoNodes,
    handleDelete,
    handleTodoFormOrNot,
    todoFormOrNot
  }
}
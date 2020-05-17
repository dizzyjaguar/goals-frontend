import React, { useState, useEffect } from 'react';
import request from 'superagent';
import { useParams, useHistory } from 'react-router-dom';
import { getTodoById, handleDelete } from '../../services/Todos/todoServices';
import TodoDetail from '../../components/TodoDetail/TodoDetail';

const TodoDetailData = () => {
  const [todo, setTodo] = useState({});
  let history = useHistory();
  let { _id } = useParams();

  useEffect(() => {
    getTodoById(_id)
      .then(todo => setTodo(todo.body));
  }, []);

  const handleDelete = async (todo) => {
    await request.delete(`http://localhost:7890/api/v1/todos/${todo._id}`)
    console.log('delete function is firing')
    await (history.goBack())
    //this way works for class components
    // await this.props.history.push('/todos');
  }
  console.log(_id)
  console.log(todo)
  return (
    <>
      <h1>Hello</h1>
      <TodoDetail todo={todo} handleDelete={handleDelete} />
    </>
  );
};

export default TodoDetailData;
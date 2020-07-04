import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleTodo, getTodos } from '../selectors/todoSelector';
import { useParams, useHistory } from 'react-router-dom';
import { setTodoRedux, deleteTodo, setTodosRedux } from '../actions/todosActions';
import { getTodoById } from '../services/Todos/todoServices';

export const useTodoDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //dont believe this is right because i wrote it with params??
  const todo = useSelector(getSingleTodo)
  let { _id } = useParams();

  useEffect(() => {
    dispatch(setTodoRedux(_id))
  }, [])

  const handleDelete = async (todo) => {
    dispatch(deleteTodo(todo))
      await (history.goBack())
  };

  return {
    todo,
    handleDelete
  }

}
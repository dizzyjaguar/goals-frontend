import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleTodo } from '../selectors/todoSelector';
import { useParams } from 'react-router-dom';
import { setTodo } from '../actions/todosActions';

export const useTodoDetail = () => {
  const dispatch = useDispatch();
  const todo = useSelector(getSingleTodo);
  let { _id } = useParams();

  useEffect(() => {
    dispatch(setTodo(_id))
  }, []);


  
}
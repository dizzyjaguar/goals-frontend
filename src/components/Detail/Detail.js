import React from 'react';
import { useTodoDetail } from '../../hooks/todoHooks/todoDetailHook';
import TodoItem from '../TodoItem/TodoItem';

const Detail = () => {
  const { todo, handleDelete } = useTodoDetail();
  
  return (
    <div className='TodoDetail-div'>
          <TodoItem 
          todo={todo}
          handleDelete={handleDelete}
           />    
    </div>
  ) 
}

export default Detail;
import React from 'react';
import { useTodoList } from '../../hooks/todoListHook';

const List = () => {
  const { todoNodes, todoFormOrNot } = useTodoList();

  return (
    <div className='TodoList'>
      { todoFormOrNot() }
        
        {todoNodes}
        
      </div>
  )
}

export default List;
import React from 'react'
import TodoItem from '../TodoItem/TodoItem';

const TodoDetail = ({ todo, handleDelete }) => {
  return (
    <div className='TodoDetail-div'>
          <TodoItem 
          todo={todo}
          handleDelete={handleDelete}
          // handleUpdate={handleUpdate}
           />    
    </div>
  )
}

export default TodoDetail;
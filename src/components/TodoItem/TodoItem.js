import React from 'react'
import { Link } from 'react-router-dom';

const TodoItem = ({ todo, handleDelete }) => (
  <div className='TodoItem'>
        {/* this is for turning the title of the todo into a link or not depending on if its in the list page or detail page */}
        {
          window.location.href.includes('todos') 
          ? <Link to={`todo/${todo._id}`}> <h3 className='Todo-title'> {todo.title} </h3> </Link> : <h3 className='Todo-title'> {todo.title} </h3>
        }
        
        <p className='Todo-desc'> {todo.description} </p>
        <Link to={`/todo/update/${todo._id}`}>
            <button>Update</button>
        </Link>
        <button id='Todo-delete' onClick={() => handleDelete(todo)}>Delete</button>
        {/* <div className={CompleteButton}></div> */}
      </div>
)

export default TodoItem;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class TodoItem extends Component {

  render() { 
    const { todo } = this.props;
    return (
      <div className='TodoItem'>
        
        {
          window.location.href.includes('todos') 
          ? <Link to={`todo/${todo._id}`}> <h3 className='Todo-title'> {todo.title} </h3> </Link>
          
          : <h3 className='Todo-title'> {todo.title} </h3>
        }

        <p className='Todo-desc'> {todo.description} </p>
        {/* <button id='Todo-update' onClick={() => this.props.handleTurnIntoForm(this.props.todo)}>Update</button> */}
        <Link to={`/todo/update/${todo._id}`}>
            <button>Update</button>
        </Link>
        <button id='Todo-delete' onClick={() => this.props.handleDelete(this.props.todo)}>Delete</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import request from 'superagent';

export default class TodoItem extends Component {
  

  render() {
    const { todo } = this.props;
    return (
      <div className='TodoItem'>
        <h3 className='Todo-title'> {todo.title} </h3>
        <p className='Todo-desc'> {todo.description} </p>
        <button onClick={() => this.props.handleDelete(this.props.todo)}>Delete</button>
      </div>
    )
  }
}

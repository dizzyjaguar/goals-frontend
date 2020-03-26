import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem';

const getTodoList = () => request.get('http://localhost:7890/api/v1/todos')

export default class TodoList extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    const data = await request.get('http://localhost:7890/api/v1/todos')
    console.log(data.body);
  }

  render() {
    return (
      <div className='TodoList'>
        
      </div>
    )
  }
}

import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem';

const getTodoList = () => request.get('http://localhost:7890/api/v1/todos')

export default class TodoList extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    const data = await getTodoList();
    console.log(data.body);

    this.setState({
      todos: data.body
    })
  }

  render() {
    return (
      <div className='TodoList'>
      <h2>Hey this is the List Component</h2>
        {
          this.state.todos.map(todo => <TodoItem todo={todo} /> )
        }
      </div>
    )
  }
}

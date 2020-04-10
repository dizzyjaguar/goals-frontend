import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';


const getTodoList = () => request.get('http://localhost:7890/api/v1/todos')

export default class TodoList extends Component {
  state = {
    todos: [],
    
  }

  loadData = async() => {
    const data = await getTodoList();
    
    this.setState({
      todos: data.body
    })
  }

  
  componentDidMount = async() => {
    await this.loadData()
  }

  handleDelete = async (todo) => {
    await request.delete(`http://localhost:7890/api/v1/todos/${todo._id}`)
    console.log('delete function is firing')
    
    await this.loadData()
  }

  handleUpdate = async (todo) => {
    await request.patch(`http://localhost:7890/api/v1/todos/${todo._id}`)
    console.log('update function is firing')

    await this.loadData()
  }

  render() {
    return (
      <div className='TodoList'>

      <TodoForm />

      <h2>Hey this is the List Component</h2>
        {
          this.state.todos.map(todo => <TodoItem 
          todo={ todo }          
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          key={ todo._id }

           /> )
        }
      </div>
    )
  }
}

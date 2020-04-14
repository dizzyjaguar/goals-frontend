import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import UpdateTodo from './UpdateTodo';


const getTodoList = () => request.get('http://localhost:7890/api/v1/todos')

export default class TodoList extends Component {
  state = {
    todos: [],
    editForm: false
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

  handleTurnIntoForm = (todo) => {
    if (this.state.editForm === false) {
      this.setState({
        editForm: true
      })
    } else {
      this.setState({
        editForm: false
      })
    }
  }

  handleUpdate = async (todo) => {
    await request.patch(`http://localhost:7890/api/v1/todos/${todo._id}`)
    console.log('update function is firing')

    await this.loadData()
  }

  render() {
    
    console.log(this.state.editForm)
    
    return (
      <div className='TodoList'>

      <TodoForm />

      <h2>Hey this is the List Component</h2>

      {/* THIS NEEDS TO CONDITIONALLY RENDER THAT TODOS EDIT FORM */}
        {(this.state.editForm)? <h1>editForm state true</h1> 
          : <h1>edit form state false</h1>
        }

        {
          
          this.state.todos.map(todo => <TodoItem 
          todo={ todo }          
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          handleTurnIntoForm={this.handleTurnIntoForm}
          key={ todo._id }

           /> )
        }

        
      </div>
    )
  }
}

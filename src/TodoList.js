import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getTodoList = () => request.get('http://localhost:7890/api/v1/todos')

export default class TodoList extends Component {
  state = {
    todos: [],
    
  }

  
  componentDidMount = async() => {
    const data = await getTodoList();
    console.log(data.body);

    this.setState({
      todos: data.body
    })
  }

  handleDelete = async (todo) => {
    await request.delete(`http://localhost:7890/api/v1/todos/${todo._id}`)
    console.log('this delete function is firing')
    //below me needs to get turned into its own function, instead of calling it twice, just like on componentDidMount
    const data = await getTodoList();
    this.setState({
      todos: data.body
    })
  }

  render() {
    return (
      <div className='TodoList'>


      <form>

      </form>

      <TodoForm />

      <h2>Hey this is the List Component</h2>
        {
          this.state.todos.map(todo => <TodoItem 
          todo={ todo }          
          handleDelete={this.handleDelete}
          key={ todo._id }

           /> )
        }
      </div>
    )
  }
}

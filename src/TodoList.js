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

  // handleClick = async (e) => {
  //   e.preventDefault();

  //   const newTodo = {
  //     title: this.state.titleInput,
  //     description: this.state.descInput,
  //     complete: false
  //   };

    
  //   const data = await request.post('http://localhost:7890/api/v1/todos', {
  //     title: 'hellllo',
  //     description: 'test to see if my states not updating',
  //     complete: false
  //   }
  //   )

  // }

  // handleInput = (e) => {
  //   this.setState({  
  //       titleInput: e.target.value,
  //       descInput: e.target.value
  //   })
  // };

  render() {
    return (
      <div className='TodoList'>


      <form>

      </form>

      <TodoForm />

      <h2>Hey this is the List Component</h2>
        {
          this.state.todos.map(todo => <TodoItem todo={todo} /> )
        }
      </div>
    )
  }
}

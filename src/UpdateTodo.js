import React, { Component } from 'react';
import request from 'superagent';


export default class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      title: '',
      description: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getTodoById = (todoId) => request.get(`http://localhost:7890/api/v1/todos/${todoId}`)

  componentDidMount = async() => {
    const todoId = this.props.match.params._id
    const data = await this.getTodoById(todoId)
    const todo = data.body
    console.log(todo.title)
    this.setState({
      todo: todo,
      title: todo.title,
      description: todo.description,
    })
    console.log(this.state)

    //-----------
    //NEED TO NOW PASS THE FETCHED DATA INTO STATE AND TO BE THE INTIAL VALUES OF THE FORM!!
 
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.value
    const name = input.name
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (todo) => {
    console.log('Update Todo sent');
    
    const updatedTodo = {
      title: this.state.title,
      description: this.state.description,
      complete: false,
    }
    
    await request.patch(`http://localhost:7890/api/v1/todos/${todo._id}`, updatedTodo)
  }

  


  render() {
    // const { todo } = this.props;
    return (
      <div>
        <form className='Todo-update-form'>
          <label>
            Title:
            <input name='title' type='text' value={ this.state.title } onChange={ this.handleChange } />
          </label>

          <label>
            Description:
            <input name='description' type="text" value={ this.state.description } onChange={ this.handleChange } />
          </label>

          <button onClick={() => this.handleSubmit(this.state.todo)}>Submit</button>
        

        </form>
      </div>
    )
  }
}

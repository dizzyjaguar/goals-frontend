import React, { Component } from 'react'
import request from 'superagent';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'abc',
      description: 'def',
      complete: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.title,
      description: event.target.description
    });
  }
  
  handleSubmit= async (event) => {
    console.log('New todo submitted');
    event.preventDefault();

    const newTodo = {
      title: this.state.title,
      description: this.state.description,
      complete: this.state.complete
    }

    const data = await request.post('http://localhost:7890/api/v1/todos', newTodo)

  }

  render() {
    return (
      <div>
        <form className='Todo-form'>
          <label>
            Title:
            <input type="text" value={ this.state.title } />
          </label>
          
          <label>
            Description:
            <input type="text" value={ this.state.description } />
          </label>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}

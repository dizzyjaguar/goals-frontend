import React, { Component } from 'react'
import request from 'superagent'

export default class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async (event) => {
    const input = event.target
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
      complete: this.state.complete,
    }
    
    await request.patch(`http://localhost:7890/api/v1/todos${todo._id}`)
  }

  


  render() {
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

          <button onClick={() => this.props.handleUpdate(this.props.todo)}>Submit</button>

        </form>
      </div>
    )
  }
}

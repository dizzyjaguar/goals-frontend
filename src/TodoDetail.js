import React, { Component } from 'react'
import TodoItem from './TodoItem';
import request from 'superagent';

const getTodoById = (_id) => request.get(`http://localhost:7890/api/v1/todos/${_id}`)

export default class TodoDetail extends Component {
  state = { todo: {} }

  async componentDidMount() {
    const data = await getTodoById(this.props.match.params._id);
    // console.log(data.body);

    if(data.body) {
      this.setState({
        todo: data.body
      })
    }

    console.log(this.state.todo)
  }

  render() {
    return (
      <div className='TodoDetail-div'>
        <TodoItem todo={ this.state.todo } />
        
      </div>
    )
  }
}

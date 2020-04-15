import React, { Component } from 'react'
import TodoItem from './TodoItem';
import request from 'superagent';


const getTodoById = (_id) => request.get(`http://localhost:7890/api/v1/todos/${_id}`)

export default class TodoDetail extends Component {
  state = { todo: {} }

  async componentDidMount() {
    const data = await getTodoById(this.props.match.params._id);
    // console.log(this.props.match.params);

    if(data.body) {
      this.setState({
        todo: data.body
      })
    }
  }

  handleDelete = async (todo) => {
    await request.delete(`http://localhost:7890/api/v1/todos/${todo._id}`)
    console.log('delete function is firing')
    
    //this way works for class components
    await this.props.history.push('/todos');
  }

  render() {
    return (
      <div className='TodoDetail-div'>
        <TodoItem 
        todo={ this.state.todo }
        handleDelete={this.handleDelete}
        handleUpdate={this.handleUpdate}
         />    
      </div>
    )
  }
}

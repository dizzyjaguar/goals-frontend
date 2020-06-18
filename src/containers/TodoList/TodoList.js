import React, { useState, useEffect } from 'react'
import request from 'superagent';
import TodoItem from '../../components/TodoItem/TodoItem';
import CreateTodoControl from '../../containers/CreateTodoControl/CreateTodoControl';
import { getTodoList } from '../../services/Todos/todoServices';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTodos } from '../../actions/todosActions';



const TodoList = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [createTodoForm, setCreateTodoForm] = useState(false);
  let history = useHistory();

  // useEffect(() => {
  //   getTodoList()
  //     .then(fetchedTodos => setTodos(fetchedTodos.body));

  //   }, []);
    
    useEffect(() => {
      dispatch(setTodos())
      
  }, []);

  const handleDelete = async (todo) => {
    await request.delete(`http://localhost:7890/api/v1/todos/${todo._id}`)
  }

  
  const todoNodes = todos.map(todo => {
    return <TodoItem 
      todo={ todo }          
      handleDelete={handleDelete}
    // handleUpdate={this.handleUpdate}
    // handleTurnIntoForm={this.handleTurnIntoForm}
      key={ todo._id }
  /> })

const todoFormOrNot = () => {
  if (createTodoForm === true) {
    return <CreateTodoControl />
  } else {
    return <button onClick={handleTodoFormorNot}>Create Todo</button> 
  }
};

const handleTodoFormorNot = () => {
  if (createTodoForm === true) {
    setCreateTodoForm(false)
  } else setCreateTodoForm(true)
};

return (
    <div className='TodoList'>
      {/* <CreateTodoControl /> */}
      { todoFormOrNot() }
      <h2>Hey this is the List Component</h2>
      {/* THIS NEEDS TO CONDITIONALLY RENDER THAT TODOS EDIT FORM */}
        { (editForm)? <h1>editForm state true</h1> 
          : <h1>edit form state false</h1> }

        {todoNodes}
        
      </div>
  );
};

export default TodoList;

// // THIS WAS A POTENTIAL IDEA FOR RENDERING IT IN PLACE BUT DOESNT WORK YET
// // handleTurnIntoForm = (todo) => {
// //   if (this.state.editForm === false) {
// //     this.setState({
// //       editForm: true
// //     })
// //   } else {
// //     this.setState({
// //       editForm: false
// //     })
// //   }
// // }

// // handleUpdate = async (todo) => {
// //   await request.patch(`http://localhost:7890/api/v1/todos/${todo._id}`)
// //   console.log('update function is firing')

// //   await this.loadData()
// // }
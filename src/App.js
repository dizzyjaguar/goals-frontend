import React, { Component } from 'react'
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Header from './Header';
import TodoList from './TodoList';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
        <Header />
        <TodoList />
      </div>
      </Router>
    )
  }
}


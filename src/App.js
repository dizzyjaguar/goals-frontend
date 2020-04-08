import React, { Component } from 'react'
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import TodoList from './TodoList';
import About from './About';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
        <Header />

        <Switch>
          
          <Route exact path='/' component={Landing} />
          <Route exact path='/todos' component={TodoList} />
          <Route exact paht='/about' component={About} />
        </Switch>
        {/* <TodoList /> */}


      </div>

      </Router>
      
      
    )
  }
}


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
import TodoDetail from './TodoDetail';
import About from './About';
import './App.css';
// only use bootstrap if need be, better to start creating your own css frameworks
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
        <Header />

        <Switch>
          
          <Route exact path='/' component={Landing} />
          <Route exact path='/todos' component={TodoList} />
          <Route exact path='/about' component={About} />
          <Route exact path='/todo/:_id' component={TodoDetail} />

        </Switch>
        {/* <TodoList /> */}


      </div>

      </Router>
      
      
    )
  }
}


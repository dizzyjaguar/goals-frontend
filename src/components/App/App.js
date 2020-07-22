import React from 'react'
import { 
  Route, 
  Switch,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import About from '../About/About';
import './App.css';
import List from '../List/List';
import Detail from '../Detail/Detail';
import UpdateTodoForm from '../UpdateTodoForm/UpdateTodoForm';
import Signup from '../User/Signup';
import Login from '../User/Login';
import Profile from '../User/Profile';
import Goal from '../Goals/Goal';
import GoalList from '../Goals/GoalList';



export default function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/todos' component={List} />
          <Route exact path='/about' component={About} />
          <Route exact path='/todo/:_id' component={Detail} />
          <Route exact path='/todo/update/:_id' component={UpdateTodoForm} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/global/goals' component={GoalList} />
          {/* <Route exact path='/tests/form' component={} /> */}
          
        </Switch>
      </div>
    </Router>
  )
}


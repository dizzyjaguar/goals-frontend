import React from 'react'
import { 
  Route, 
  Switch,
  BrowserRouter as Router,
  Redirect, 
} from 'react-router-dom';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import About from '../About/About';
import './App.scss';
import Signup from '../User/Signup';
import Login from '../User/Login';
import Profile from '../User/Profile';
import GoalList from '../Goals/GoalList';
import GoalDetail from '../Goals/GoalDetail';
import { useProfile } from '../../hooks/authHooks/profileHooks';
import Dashboard from '../Dashboard/Dashboard';



export default function App() {
  const { user } = useProfile();
  
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'>
            {user ? <Redirect to='/dashboard' /> : <Landing /> }
          </Route>
          <Route exact path='/dashboard'>
            {user ? <Dashboard /> : <Landing /> }
          </Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login'>
            {user ? <Dashboard /> : <Login />}
          </Route>
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/global/goals' component={GoalList} />
          <Route exact path='/global/goal/:_id' component={GoalDetail} />
          {/* <Route exact path='/tests/form' component={} /> */}
          
        </Switch>
      </div>
    </Router>
  )
}


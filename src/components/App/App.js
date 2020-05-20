import React from 'react'
import { 
  Route, 
  Switch,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Header from '../Header/Header';
import Landing from '../Landing.js/Landing';
import TodoList from '../../containers/TodoList/TodoList';
import UpdateTodoForm from '../UpdateTodoForm/UpdateTodoForm';
import About from '../About/About';
import './App.css';
import TodoDetailData from '../../containers/TodoDetailData/TodoDetailData';


export default function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/todos' component={TodoList} />
          <Route exact path='/about' component={About} />
          <Route exact path='/todo/:_id' component={TodoDetailData} />
          <Route exact path='/todo/update/:_id' component={UpdateTodoForm} />
          
        </Switch>
      </div>
    </Router>
  )
}







// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//       <div className='App'>
//         <Header />

//         <Switch>
          
//           <Route exact path='/' component={Landing} />
//           <Route exact path='/todos' component={TodoList} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/todo/:_id' component={TodoDetail} />
//           <Route exact path='/todo/update/:_id' component={UpdateTodo} />

//         </Switch>
//         {/* <TodoList /> */}


//       </div>

//       </Router>
      
      
//     )
//   }
// }


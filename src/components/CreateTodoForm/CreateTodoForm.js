import React from 'react'


const CreateTodoForm = ({ title, description, handleChange, handleSubmit }) => {
  
  return(
    <div>
        <form className='Todo-form'>
          <label>
            Title:
            <input name='title' type="text" value={title} onChange={handleChange} />
          </label>
          
          <label>
            Description:
            <input name='description' type="text" value={description} onChange={handleChange }/>
          </label>
          <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
      </div>
  )
}

export default CreateTodoForm;


// export default class CreateTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'abc',
//       description: 'def',
//       complete: false
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = async (event) => {
//     const input = event.target;
//     const value = input.value
//     const name = input.name
    
//     this.setState({
//       [name]: value
//     });
//   }
  
//   handleSubmit = async (event) => {
//     console.log('New todo submitted');
//     // event.preventDefault();

//     const newTodo = {
//       title: this.state.title,
//       description: this.state.description,
//       complete: this.state.complete
//     }

//     const data = await request.post('http://localhost:7890/api/v1/todos', newTodo)

//   }

//   render() {
//     return (
//       <div>
//         <form className='Todo-form'>
//           <label>
//             Title:
//             <input name='title' type="text" value={ this.state.title } onChange={ this.handleChange } />
//           </label>
          
//           <label>
//             Description:
//             <input name='description' type="text" value={ this.state.description } onChange={ this.handleChange } />
//           </label>
//           <button onClick={ this.handleSubmit }>Add</button>
//         </form>
//       </div>
//     )
//   }
// }

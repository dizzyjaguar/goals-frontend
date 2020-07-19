import React from 'react'
import { useTodoForm } from '../../hooks/todoHooks/todoFormHooks';


const CreateTodoForm = () => {
  const { values, handleChange, handleSubmit } = useTodoForm();

  return(
    <div>
        <form className='Todo-form'>
          <label>
            Title:
            <input name='title' type="text" value={values.title} onChange={handleChange} placeholder='title' />
          </label>
          
          <label>
            Description:
            <input name='description' type="text" value={values.description} onChange={handleChange} placeholder='description' />
          </label>
          <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
      </div>
  )
}

export default CreateTodoForm;
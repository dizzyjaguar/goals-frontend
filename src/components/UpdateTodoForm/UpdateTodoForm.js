import React from 'react';
import { useUpdateTodo } from '../../hooks/todoHooks/updateTodoHooks';

const UpdateTodoForm = () => {
  const { values, handleChange, handleSubmit } = useUpdateTodo();
  
  return (
    <div>
        <form className='Todo-update-form'>
          <label>
            Title:
            <input name='title' type='text' value={values.title} onChange={handleChange} />
          </label>
          <label>
            Description:
            <input name='description' type="text" value={values.description} onChange={handleChange} />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
  )
}

export default UpdateTodoForm;
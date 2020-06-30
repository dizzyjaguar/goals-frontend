import React from 'react';

const UpdateTodoForm = ({ todo, title, description, handleChange, handleSubmit }) => {

  return (
    <div>
        <form className='Todo-update-form'>
          <label>
            Title:
            <input name='title' type='text' value={title} onChange={handleChange} />
          </label>
          <label>
            Description:
            <input name='description' type="text" value={description} onChange={handleChange} />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
  )
}

export default UpdateTodoForm;
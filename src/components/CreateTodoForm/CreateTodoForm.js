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
import React from 'react'
import { useGoalForm } from '../../hooks/goalhooks/goalFormHooks';

const CreateGoal = () => {
  const { values, handleChange, handleSubmit, user } = useGoalForm();
  
  return (
    <>
      <form>
        <label>
          Title:
          <input name='title' type='text' value ={values?.title} onChange={handleChange} placeholder='title' />
        </label>
        <label>
          Description:
          <input name='description' type='text' value={values?.description} onChange={handleChange} placeholder='description' />
        </label>
        
        <button type='submit' onClick={handleSubmit}>Create</button>
        
        
      </form>
    </>
  )
}

export default CreateGoal;
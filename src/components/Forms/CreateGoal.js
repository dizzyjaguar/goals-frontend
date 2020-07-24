import React from 'react'
import { useGoalForm } from '../../hooks/goalhooks/goalFormHooks';

const CreateGoal = () => {
  const { values, handlesChange, handleSubmit, user } = useGoalForm;
  
  return (
    <>
      <form>
        <label>
          Title:
          <input name='title' type='text' value ={values?.title} onChange={handlesChange} placeholder='title' />
        </label>
        <label>
          Description:
          <input name='description' type='text' value={values?.description} onChange={handlesChange} placeholder='description' />
        </label>
        
        <button type='submit' onClick={handleSubmit}>Create</button>
        
        
      </form>
    </>
  )
}

export default CreateGoal;
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../selectors/authSelector';
import { useState } from 'react'
import { createInsightRedux } from '../../actions/insightActions';


export const useInsightHooks = () => {
  const user = useSelector(getUser)
  const dispatch = useDispatch();
  const [insightValue, setInsightValue] = useState('');
  
  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    event.persist();
  
    setInsightValue(value);
  };

  const handleSubmit = async(goal) => {
    const insightObj = {
      insightBy: user._id,
      goalPost: goal._id,
      insight: insightValue
    }

    dispatch(createInsightRedux(insightObj))
  }

  return {
    handleChange,
    handleSubmit,
    insightValue
  }
};
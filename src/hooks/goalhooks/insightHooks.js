import { useSelector } from 'react-redux';
import { getUser } from '../../selectors/authSelector';
const { useState } = require('react');




export const useInsightHooks = () => {
  const user = useSelector(getUser)
  const [insightValues, setInsightValues] = useState({
    insightBy: user,
    goalPost: 0,
    insight: '',
  });
  
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
  
    setInsightValues({ ...insightValues, [name]: value });
  };
};
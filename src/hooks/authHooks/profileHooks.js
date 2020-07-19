import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../selectors/authSelector';

export const useProfile = () => {
  // const dispatch = useDispatch();
  const user = useSelector(getUser)

  return {
    user
  }
}
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleTodo } from '../../selectors/todoSelector';
import { useParams, useHistory } from 'react-router-dom';
import { setTodoRedux, deleteTodo } from '../../actions/todosActions';


export const useTodoDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const todo = useSelector(getSingleTodo)
  let { _id } = useParams();

  useEffect(() => {
    dispatch(setTodoRedux(_id))
  }, [])

  const handleDelete = async (todo) => {
    dispatch(deleteTodo(todo))
      await (history.goBack())
  };

  return {
    todo,
    handleDelete
  }

}
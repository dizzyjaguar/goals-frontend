export const getTodos = state => state.todos.todos;

//dont know if this currently working
export const getSingleTodo = (state, id) => {
  getTodos(state).find(todo => todo._id === id);
};
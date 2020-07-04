export const getTodos = state => state.todos.todos;

export const getSingleTodo = (state, id) => {
  getTodos(state).find(todo => todo._id === id);
};
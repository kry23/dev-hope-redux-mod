// Action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const EDIT_TODO = "EDIT_TODO";

export const addTodo = (id, title) => ({
  type: ADD_TODO,
  payload: { id, title },
});
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: { id } });
export const editTodo = (id, title) => ({
  type: EDIT_TODO,
  payload: { id, title },
});

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default todosReducer;

import { createStore, combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import todosReducer from "./ToDoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer);

store.dispatch({ type: "INCREMENT_COUNTER" });

store.dispatch({
  type: "ADD_TODO",
  payload: { id: 1, title: "go to market" },
});

const state = store.getState();
console.log(state);

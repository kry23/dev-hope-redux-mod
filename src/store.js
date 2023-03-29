import { createStore } from "redux";
import {
  counterReducer,
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./CounterReducer";

export const store = createStore(counterReducer);

store.dispatch(incrementCounter(1));
store.dispatch(decrementCounter(2));
store.dispatch(resetCounter());

store.subscribe(() => {
  console.log(store.getState());
});

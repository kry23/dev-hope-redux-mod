import { createStore } from "redux";
import counterReducer, { incrementCounter } from "./CounterReducer";

const store = createStore(counterReducer);

const handleStateUpdate = () => {
  const state = store.getState();
  console.log("State updated:", state);
};

const unsubscribe = store.subscribe(handleStateUpdate);

store.dispatch(incrementCounter());

store.dispatch(incrementCounter());

unsubscribe();

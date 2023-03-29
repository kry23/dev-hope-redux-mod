import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./CounterReducer";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
store.dispatch(incrementCounter(1));
store.dispatch(decrementCounter(2));

store.dispatch(resetCounter());

store.subscribe(() => {
  console.log(store.getState());
});

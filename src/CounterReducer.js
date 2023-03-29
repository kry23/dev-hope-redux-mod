const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const RESET_COUNTER = "RESET_COUNTER";
const initialState = {
  count: 0,
};

export const incrementCounter = (by = 1) => {
  return {
    type: INCREMENT_COUNTER,
    payload: by,
  };
};
export const decrementCounter = (by = 1) => {
  return {
    type: DECREMENT_COUNTER,
    payload: by,
  };
};
export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
  };
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return state + action.payload;
    }

    case DECREMENT_COUNTER: {
      return state + action.payload;
    }

    case RESET_COUNTER: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

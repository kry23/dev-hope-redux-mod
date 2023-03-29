
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const RESET_COUNTER = 'RESET_COUNTER';


const incrementCounter = () => ({ type: INCREMENT_COUNTER });
const decrementCounter = () => ({ type: DECREMENT_COUNTER });
const resetCounter = () => ({ type: RESET_COUNTER });


const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET_COUNTER:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};
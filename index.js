//state - count 0
//action - increment, decrement, reset
//reducer - function that takes state and action and returns new state
//store - holds the state of the application
//dispatch - function that sends an action to the reducer
//createStore - function that creates a store with a reducer and initial state

const initialState = {
  count: 0,
};

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//initial state
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
//increment by value action
const incrementByValueAction = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

//decrement action
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

//reset action
const resetAction = () => {
  return {
    type: RESET,
  };
};


//reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case INCREMENT_BY_VALUE:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

//create store
const { createStore } = require("redux");
const store = createStore(counterReducer);
//subscribe to store
store.subscribe(() => {
  console.log("State changed:", store.getState());
});
//dispatch actions
// store.dispatch(incrementAction()); // count: 1
// store.dispatch(incrementAction()); // count: 2
// store.dispatch(decrementAction()); // count: 1
store.dispatch(incrementByValueAction(5)); // count: 6
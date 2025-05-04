
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
const DECREMENT = "DECREMENT";

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
}
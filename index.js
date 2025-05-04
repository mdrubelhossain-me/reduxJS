
const { createStore } = require("redux");


//define constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


// State
const initialCounterState = {
    count: 0,
};

const initialUserState = {
    users: [{ name: "John" }],
};

// Action - Object - type, payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

//reducer - pure function - takes state and action and returns new state
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};


//create store - takes reducer as argument
const store = createStore(counterReducer);
//subscribe to store - takes a function as argument
store.subscribe(() => {
    console.log("State changed:", store.getState());
});
//dispatch action - takes action as argument
store.dispatch(incrementCounter());

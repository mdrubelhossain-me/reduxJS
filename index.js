
//define constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

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
const addUser = () => {
    return {
        type: ADD_USER,
    };
};



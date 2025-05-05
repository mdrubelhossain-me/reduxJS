// Initial state
const initialState = {
    users: ["Doe"],
    count: 1,
  };
  
  // Action type
  const ADD_USER = "ADD_USER";
  
  // Action creator
  const addUser = (user) => {
    return {
      type: ADD_USER,
      payload: user,
    };
  };
  
  // Reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          users: [...state.users, action.payload],
            count: state.count + 1,
        };
      default:
        return state;
    }
  };
  
  // Create store
  const { createStore } = require("redux");
  const store = createStore(reducer);
  
  // Subscribe to store
  store.subscribe(() => {
    console.log("State updated:", store.getState());
  });
  
  // Dispatch action
  store.dispatch(addUser("John")); 
  store.dispatch(addUser("Abul")); 
  
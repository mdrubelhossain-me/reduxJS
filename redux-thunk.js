const axios = require('axios');

// imports
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').defalult;

// Action Types
const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

// Action Creators
const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST,
});

const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
});

const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    payload: error,
});

// Async Action Creator
const fetchTodos = () => {
    return async (dispatch) => {
        dispatch(fetchTodosRequest());
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch(fetchTodosSuccess(response.data));
        } catch (error) {
            dispatch(fetchTodosFailure(error.message));
        }
    };
};

// Initial State
const initialState = {
    loading: false,
    todos: [],
    error: '',
};

// Reducer
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_TODOS_SUCCESS:
            return {
                loading: false,
                todos: action.payload,
                error: '',
            };
        case FETCH_TODOS_FAILURE:
            return {
                loading: false,
                todos: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

// Create Redux store
const store = createStore(todosReducer, applyMiddleware(thunk));

// Subscribe to store updates
store.subscribe(() => console.log(store.getState()));

// Dispatch the async action
store.dispatch(fetchTodos());

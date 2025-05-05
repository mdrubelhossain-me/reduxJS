// Product Reducer

// Initial State
const initialProductState = {
  products: ["potato", "tomato", "onion"],
  count: 3,
};

// Action Types
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// Action Creators
const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  payload: product,
});

const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product, // { oldProduct, newProduct }
});

// Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        count: state.count + 1,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product !== action.payload
        ),
        count: state.count - 1,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product === action.payload.oldProduct
            ? action.payload.newProduct
            : product
        ),
      };
    default:
      return state;
  }
};

// Selectors
const getAllProducts = (state) => state.products;
const getProductCount = (state) => state.count;
const getProduct = (state, name) =>
  state.products.find((product) => product === name);

// Create Store
const { createStore } = require("redux");
const store = createStore(productReducer);

// Subscribe to store
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Dispatch Actions
store.dispatch(addProduct("carrot"));
store.dispatch(addProduct("cabbage"));
store.dispatch(removeProduct("potato"));
store.dispatch(updateProduct({ oldProduct: "tomato", newProduct: "broccoli" }));

// Use Selectors
const currentState = store.getState();
console.log("All Products:", getAllProducts(currentState));
console.log("Total Products:", getProductCount(currentState));
console.log("Find Product 'onion':", getProduct(currentState, "onion"));
console.log("Find Product 'banana':", getProduct(currentState, "banana")); // undefined

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productsReducer from "../reducers/products";

const rootReducer = combineReducers({
  data: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

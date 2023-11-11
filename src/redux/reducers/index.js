import { combineReducers } from "redux";
import productsReducer from "./products";

const rootReducer = combineReducers({
  products: productsReducer,
  // Outros reducers aqui, se houver
});

export default rootReducer;

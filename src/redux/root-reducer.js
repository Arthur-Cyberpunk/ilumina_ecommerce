import { combineReducers } from "redux";

import cartReducer from "./cart/reducer";
import productsReducer from "./product/reducer";

const rootReducer = combineReducers({ productsReducer, cartReducer });

export default rootReducer;

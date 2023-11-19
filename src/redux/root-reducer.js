import { combineReducers } from "redux";

import productsReducer from "./product/reducer";

const rootReducer = combineReducers({ productsReducer });

export default rootReducer;

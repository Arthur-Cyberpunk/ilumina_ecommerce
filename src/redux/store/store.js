import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"; // Se estiver usando middlewares, como o redux-thunk

import rootReducer from "../reducers/index"; // Importe o seu rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

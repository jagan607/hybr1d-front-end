import {configStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./../reducers/index.js";

const store = configStore(rootReducer, applyMiddleware(thunk));

export default store;

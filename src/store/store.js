import {createStore} from "redux";
import {pizzaReducer} from "../reducers/pizza-reducer";
import {filterReducer} from "../reducers/filter-reducer";
const {combineReducers} = require("redux");


const rootReducer = combineReducers({
    pizza: pizzaReducer,
    filter:filterReducer
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

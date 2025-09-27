import { combineReducers, createStore } from "redux";
import reducerBasket from "./basket/reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    basket: reducerBasket
})
const store = createStore(rootReducers)

export default store
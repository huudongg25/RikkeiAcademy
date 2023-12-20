import cartReducer from "./reducers/cartReducer";
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
    cart: cartReducer,
  });

const store = createStore(rootReducer)

export default store
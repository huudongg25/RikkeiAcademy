import { combineReducers } from 'redux';
import { counterSlice } from "./test";

const rootReducer = combineReducers({
  test: counterSlice.reducer, // Đảm bảo bạn sử dụng counterSlice.reducer
});

export default rootReducer;

import countSlice from "./countSlice"
import numSlice from "./numSlice"

const reducer = combineReducers({ countSlice, numSlice })

export default reducer
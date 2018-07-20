import { combineReducers } from "redux"
import user from "./users"
import stats from "./stats";

export default combineReducers({
    user,
    stats
})
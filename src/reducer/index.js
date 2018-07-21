import { combineReducers } from "redux"
import user from "./users"
import stats from "./stats";
import quiz from "./quiz"

export default combineReducers({
    user,
    stats,
    quiz
})
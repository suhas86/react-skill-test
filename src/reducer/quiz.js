import {RECEIVE_QUIZ_LIST} from "../action/quiz"

export default function quiz(state=[],action) {
    switch (action.type) {
        case RECEIVE_QUIZ_LIST:
            return action.quizlist.data
    
        default:
            return state;
    }
}
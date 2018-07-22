import axios from "axios";
import {getHeader} from "../utils/helper"
export const RECEIVE_QUIZ_LIST = "RECEIVE_QUIZ_LIST"

function receiveAllList(quizlist) {
    return {
        type: RECEIVE_QUIZ_LIST,
        quizlist
    }
}

export const getAllList = () => {
    return dispatch => {
        axios.get("https://young-shore-27367.herokuapp.com/test/admin/all",getHeader())
        .then(response => dispatch(receiveAllList(response.data)))
    }
}
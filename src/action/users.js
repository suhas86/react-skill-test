import axios from "axios";
export const RECEIVE_USER = "RECEIVE_USER";
export const CREATE_USER = "CREATE_USER";
export const CLEAR_USER = "CLEAR_USER";

function receiveUser(user) {
    return {
        type: RECEIVE_USER,
        user
    }
}
export function clearUser() {
    return {
        type:CLEAR_USER,
        user:{}
    }
}
export const checkUser = (request) => {
    return dispatch => {
        return axios.post('/users/login', request)
            .then(response => dispatch(receiveUser(response.data)))
    }
}
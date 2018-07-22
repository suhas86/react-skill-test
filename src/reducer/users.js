import { RECEIVE_USER, CLEAR_USER } from "../action/users"

export default function user(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USER:
            return action.user;
            
        case CLEAR_USER:
        return action.user;

        default:
            return state;
    }
}
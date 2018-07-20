import {RECEIVE_STATS} from "../action/stats"

export default function stats(state = {},action) {
    switch (action.type) {
        case RECEIVE_STATS:
            return action.stats
    
        default:
            return state;
    }
}
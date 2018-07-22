import axios from "axios";
import { getHeader } from "../utils/helper"
export const RECEIVE_STATS = "RECEIVE_STATS";

function receiveStats(stats) {
    return {
        type: RECEIVE_STATS,
        stats
    }
}

export const getStats = () => {
    return dispatch => {
        return axios.get("https://young-shore-27367.herokuapp.com/test/stats", getHeader())
            .then(response => dispatch(receiveStats(response.data)))
    }
}
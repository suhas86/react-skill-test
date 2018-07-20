import axios from "axios";
import { getHeader,calculateStats } from "../utils/helper"
export const RECEIVE_STATS = "RECEIVE_STATS";

function receiveStats(stats) {
    return {
        type: RECEIVE_STATS,
        stats
    }
}

export const getStats = () => {
    return dispatch => {
        return axios.get("/test/stats", getHeader())
            .then(response => dispatch(receiveStats(calculateStats(response.data))))
    }
}
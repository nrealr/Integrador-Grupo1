import axios from "axios";
import { SERVER_API } from "../Constants";
import { getHeaders } from "../Utils";

const availableDaysMock = [
    '2024-06-02T04:34:06.212Z',
    '2024-06-05T04:34:06.212Z',
    '2024-06-10T04:34:06.212Z',
    '2024-06-15T04:34:06.212Z',
];

/**
 * gets the available days collection
 * @returns {Promise} 
 */
export const getAvailableDays = async () => {
    if (typeof window.USE_MOCK_DAYS == 'undefined') {
        return Promise.resolve(availableDaysMock);
    };
    let res = await axios.get(`${SERVER_API}/available-days`, getHeaders());
    return res.data;
};
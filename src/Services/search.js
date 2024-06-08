import axios from "axios";
import { SERVER_API } from "../Constants";


/**
 * 
 * @returns {Array}
 */
export const searchDoctors = async (query) => {
    let res = await axios.get(`${SERVER_API}/doctors/search${query}`);
    return res.data;
};
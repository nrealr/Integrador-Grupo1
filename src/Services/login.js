import axios from "axios";
import { SERVER_API } from "../Constants";


/**
 * 
 * @returns {Array}
 */
export const login = async (data) => {
    let res = await axios.post(`${SERVER_API}/users/login`, data);
    return res.data;
};
import axios from "axios";
import { SERVER_API } from "../Constants";


/**
 * 
 * @returns {Array}
 */
export const getDoctors = async () => {
    let res = await axios.get(`${SERVER_API}/doctors/list`);//for stubby use ${SERVER_API}/doctors/list
    return res.data;
};
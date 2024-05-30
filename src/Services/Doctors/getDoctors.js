import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


/**
 * 
 * @returns {Array}
 */
export const getDoctors = async () => {
    let res = await axios.get(`${SERVER_API}/doctors/list`, getHeaders());
    return res.data;
};
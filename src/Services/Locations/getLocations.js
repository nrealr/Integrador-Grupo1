import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


/**
 * 
 * @returns {Array}
 */
export const getLocations = async () => {
    let res = await axios.get(`${SERVER_API}/locations/list`, getHeaders());
    return res.data;
};
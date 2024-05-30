import axios from "axios";
import { SERVER_API } from "../Constants";
import { getHeaders } from "../Utils";


/**
 * 
 * @param {Number} id specialty id
 * @returns {Object}
 */
export const getSpecialtyById = async (id) => {
    let res = await axios.get(`${SERVER_API}/specialties/${id}`, getHeaders);
    return res.data;
};
import axios from "axios";
import { SERVER_API } from "../../Constants";


/**
 * 
 * @param {Number} id doctor id
 * @returns {Object}
 */
export const getDoctorById = async (id) => {
    let res = await axios.get(`${SERVER_API}/doctors/${id}`);
    return res.data;
};
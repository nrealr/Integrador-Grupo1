import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";



export const getAvailableDays = async (doctorId) => {
    let res = await axios.get(`${SERVER_API}/availabilities/days/${doctorId}`, getHeaders());
    return res.data;
}
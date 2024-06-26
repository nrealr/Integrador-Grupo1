import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


export const availableSlots = async (doctorId, date) => {
    let res = await axios.get(`${SERVER_API}/availabilities/available/${doctorId}/${date}`, getHeaders());
    return res.data;
};
import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


export const takenSlots = async (doctorId, date) => {
    let res = await axios.get(`${SERVER_API}/availabilities/taken/${doctorId}/${date}`, getHeaders());
    return res.data;
};
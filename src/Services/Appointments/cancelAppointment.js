import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const cancelAppointment = async (id) => {
    let res = await axios.put(`${SERVER_API}/appointments/${id}/cancel`, getHeaders());
    return res.data;
}
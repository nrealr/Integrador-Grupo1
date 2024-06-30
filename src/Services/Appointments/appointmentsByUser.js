import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";



export const getAppointmentsByUser = async (userId) => {
    let res = await axios.get(`${SERVER_API}/appointments/user/${userId}`, getHeaders());
    return res.data;
}
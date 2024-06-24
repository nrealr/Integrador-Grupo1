import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const scheduleAppointment = async (appointmentDetails) => {
    let res = await axios.post(`${SERVER_API}/appointments/schedule`, appointmentDetails, getHeaders());
    return res.data;
}
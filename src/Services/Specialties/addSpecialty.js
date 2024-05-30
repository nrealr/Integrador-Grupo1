import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const addSpecialty = async (specialty) => {
    let res = await axios.post(`${SERVER_API}/specialties/register`, specialty, getHeaders());
    return res.data;
}
import axios from "axios";
import { SERVER_API } from "../../Constants";

export const addSpecialty = async (specialty) => {
    let res = await axios.post(`${SERVER_API}/specialties/register`, specialty);
    return res.data;
}
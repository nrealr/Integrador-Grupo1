import axios from "axios";
import { SERVER_API } from "../../Constants";

export const updateSpecialty = async (specialty) => {
    let res = await axios.put(`${SERVER_API}/specialties/update/${id}`, specialty);
    return res.data;
}
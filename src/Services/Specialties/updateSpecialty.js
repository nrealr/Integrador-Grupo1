import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const updateSpecialty = async (specialty) => {
    let res = await axios.put(`${SERVER_API}/specialties/update/${id}`, specialty, getHeaders());
    return res.data;
}
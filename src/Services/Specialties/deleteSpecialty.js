import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const deleteSpecialty = async (id) => {
    let res = await axios.delete(`${SERVER_API}/specialties/delete/${id}`, getHeaders());
    return res.data;
}
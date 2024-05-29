import axios from "axios";
import { SERVER_API } from "../../Constants";

export const deleteSpecialty = async (id) => {
    let res = await axios.delete(`${SERVER_API}/specialties/delete/${id}`);
    return res.data;
}
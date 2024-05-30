import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const deleteDoctor = async (id) => {
    let res = await axios.delete(`${SERVER_API}/doctors/delete/${id}`, getHeaders());
    return res.data;
}
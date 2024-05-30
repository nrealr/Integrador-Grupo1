import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const addDoctor = async (doctor) => {
    const headers = getHeaders({ "Content-Type": "multipart/form-data" });
    let res = await axios.post(`${SERVER_API}/doctors/register`, doctor, headers);
    return res.data;
}
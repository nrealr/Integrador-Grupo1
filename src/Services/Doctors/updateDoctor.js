import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const updateDoctor = async (doctor, id) => {
    const headers = getHeaders({ "Content-Type": "multipart/form-data" });
    let res = await axios.put(`${SERVER_API}/doctors/update/${id}`, doctor, headers)
    return res.data;
    
}